from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def index_adopcion(request):
	return HttpResponse("Soy la pg principal")