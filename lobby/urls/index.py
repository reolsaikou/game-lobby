from django.urls import path,include
from lobby.views.index import index

urlpatterns = [
    path("", index, name="index"),
    path("menu/", include("lobby.urls.menu.index")),
    path("playground/", include("lobby.urls.playground.index")),
    path("settings/", include("lobby.urls.settings.index")),
]

