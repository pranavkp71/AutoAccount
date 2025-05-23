from django.urls import path
from .views import BankStatementUploadView, TransactionCreateView, TransactionUpdateView, CategoryListCreateView

urlpatterns = [
    path('upload/', BankStatementUploadView.as_view(), name='bankstatement-upload'),
    path('add', TransactionCreateView.as_view(), name='add-transaction'),
    path('transactions/<int:pk>/', TransactionUpdateView.as_view(), name='edit-transaction'),
    path('categories/', CategoryListCreateView.as_view(), name='category-list-create')
]

