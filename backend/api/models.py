from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # Types de rôles
    ROLE_CHOICES = (
        ('prestataire', 'Prestataire'),
        ('client', 'Client'),
        ('les_deux', 'Les deux'),
    )
    
    # Champs supplémentaires
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='client')
    phone = models.CharField(max_length=20, blank=True)
    school = models.CharField(max_length=200, blank=True)
    level = models.CharField(max_length=50, blank=True)
    is_verified = models.BooleanField(default=False)
    
    # Résolution des conflits avec related_name
    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name='groups',
        blank=True,
        help_text='The groups this user belongs to.',
        related_name='api_user_set',  # Changé ici !
        related_query_name='user',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name='user permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name='api_user_set',  # Changé ici !
        related_query_name='user',
    )
    
    def __str__(self):
        return f"{self.username} - {self.email}"