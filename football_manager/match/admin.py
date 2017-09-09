from django.contrib import admin

from .models import Match, Player, Team, Sponsor, Group, Standings, Rule

admin.site.register(Team)
admin.site.register(Group)
admin.site.register(Player)
admin.site.register(Match)
admin.site.register(Sponsor)
admin.site.register(Standings)
admin.site.register(Rule)
