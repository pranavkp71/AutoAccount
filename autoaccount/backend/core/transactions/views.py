import csv
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .serializers import BankStatemtentUploadSerializer
from accounts.models import Transaction, Category

class BankStatementUploadView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        serializer = BankStatemtentUploadSerializer(data=request.data)
        if serializer.is_valid():
            csv_file = serializer.validated_data['file']
            decoded_fiel = csv_file.read().decode('utf-8').splitlines()
            reader = csv.DictReader(decoded_fiel)

            for row in reader:
                amount = float(row['Amount'])
                category, _ = Category.objects.get_or_create(name=row.get('Category', 'Uncategorized'), user = request.user)

                Transaction.objects.create(
                    user = request.user,
                    date = row['Date'],
                    description = row['Description'],
                    amount = amount,
                    transaction_type = row['Type'].lower(),
                    category = category
                )

            return Response({"message": "Statement processed successfully."}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
