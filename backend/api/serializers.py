from rest_framework import serializers
from .models import User
import re

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password2', 
                  'first_name', 'last_name', 'phone', 'role', 
                  'school', 'level']

    def validate_email(self, value):
        # Validation email académique (.sn ou .edu.sn)
        if not (value.endswith('.sn') or value.endswith('.edu.sn')):
            raise serializers.ValidationError("Utilisez un email académique (.sn ou .edu.sn)")
        return value

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError("Les mots de passe ne correspondent pas")
        return data

    def create(self, validated_data):
        # Enlever password2 qui n'est pas dans le modèle
        validated_data.pop('password2')
        
        # Créer l'utilisateur
        user = User.objects.create_user(
            username=validated_data['email'],  # On utilise l'email comme username
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
            phone=validated_data.get('phone', ''),
            role=validated_data.get('role', 'client'),
            school=validated_data.get('school', ''),
            level=validated_data.get('level', ''),
        )
        return user