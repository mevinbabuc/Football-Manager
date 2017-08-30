from django.conf.urls import url

from . import views

urlpatterns = [
    url(
        regex=r'^$',
        view=views.HomePage.as_view(),
        name='homepage'
    ),
    url(
        regex=r'^team/$',
        view=views.TeamPage.as_view(),
        name='teampage'
    )
]
