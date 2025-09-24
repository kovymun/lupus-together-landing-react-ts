from django.db import models

# Create your models here.

class CommunityMember(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    message = models.TextField(max_length=50, blank=True, null=True)
    consent = models.BooleanField(default=False)
    join_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} joined the Lupus Together community"
    
"""
Optional Message Field
Validations:
- blank=True: allows form/serializer to accept empty value.
- null=True: allows the database to store NULL if no value is provided. (This fields is optional)
- max_length=50: limiting the user input to 50 characters.
"""
