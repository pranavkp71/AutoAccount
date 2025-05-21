from rest_framework import serializers

class BankStatemtentUploadSerializer(serializers.Serializer):
    file = serializers.FileField()

