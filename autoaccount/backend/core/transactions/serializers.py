from rest_framework import serializers
from accounts.models import Transaction, Category

class BankStatemtentUploadSerializer(serializers.Serializer):
    file = serializers.FileField()

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'type']

class TransactionSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), required=False, allow_null=True)

    class Meta:
        model = Transaction
        fields = ['id', 'date', 'description', 'amount', 'transaction_type', 'category']
        
