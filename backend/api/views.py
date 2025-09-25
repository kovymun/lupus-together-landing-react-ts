from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def community_members(request):
    return HttpResponse("community-member endpoint")
