#  Community Member Serializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.core.validators import RegexValidator
from api.models import CommunityMember

class CommunityMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommunityMember
        fields = "__all__"
        
    # User First Name Validation
    first_name = serializers.CharField(
        required=True,
        allow_blank=False,
        max_length=15,
        error_messages={
            "blank": "First name cannot be empty.",
            "max_length": "First name cannot exceed 15 characters.",
            "required": "First name is required."
        }
    )
    
    # User Last Name Validation
    last_name = serializers.CharField(
        required=True,
        allow_blank=False,
        max_length=15,
        error_messages={
            "blank": "Last name cannot be empty.",
            "max_length": "Last name cannot exceed 15 characters.",
            "required": "Last name is required."
        }
    )
    
    # Email: required, must follow email format + unique
    email = serializers.EmailField(
        required=True,
        allow_blank=False,
        validators=[
             UniqueValidator(
                queryset=CommunityMember.objects.all(),
                message="This email is already registered on our network"
            )
        ],
        error_messages={
            "invalid": "Enter a valid email address.",
            "blank": "Email cannot be empty.",
            "required": "Email is required."
        }
    )
    
    # Phone: required, must match regex pattern for digits only & min length = 10 (south african phone number format)
    phone = serializers.CharField(
        required=True,
        allow_blank=False,
        validators=[
            RegexValidator(
                regex=r'^\d{10}$',
                message="Phone number must be 10 digits."
            )
        ],
        error_messages={
            "blank": "Phone number cannot be empty.",
            "required": "Phone number is required."
        }
    )
    
    # Message: optional
    message = serializers.CharField(
        required=False,
        allow_blank=True,
        allow_null=True,
    )
    
    # Consent: must be True/False
    consent = serializers.BooleanField(
        required=True,
        error_messages={
            "invalid": "Consent must be true or false."
        }
    )

    
    
        
