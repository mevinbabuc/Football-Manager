from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _


@python_2_unicode_compatible
class Group(models.Model):
    name = models.CharField(_('Name of Group'), default='', max_length=255)

    def __str__(self):
        return self.name


@python_2_unicode_compatible
class Team(models.Model):
    name = models.CharField(_('Name of Team'), blank=True, max_length=255)
    group = models.ForeignKey(Group, null=True)

    wins = models.PositiveIntegerField("Total wins", default=0)
    losses = models.PositiveIntegerField("Total loss", default=0)
    knockout = models.BooleanField("is a Knockout", default=False)

    def __str__(self):
        return "{0} - Group {1}".format(self.name, self.group)


@python_2_unicode_compatible
class Player(models.Model):
    name = models.CharField(_('Name of Player'), blank=True, max_length=255)
    photo = models.ImageField(null=True)
    team = models.ForeignKey(Team)

    def __str__(self):
        return "{0} from {1}".format(self.name, self.team)


@python_2_unicode_compatible
class Match(models.Model):
    team_a = models.ForeignKey(Team, related_name='team_a')
    team_b = models.ForeignKey(Team, related_name='team_b')

    match_date = models.DateTimeField()

    team_a_score = models.SmallIntegerField(default=0, editable=True)
    team_b_score = models.SmallIntegerField(default=0, editable=True)

    winning_team = models.ForeignKey(Team, null=True, blank=True)

    def __str__(self):
        return "{0} vs {1}".format(self.team_a.name, self.team_b.name)


@python_2_unicode_compatible
class Sponsor(models.Model):
    name = models.CharField(_('Name of Sponsor'), default='', max_length=255)
    logo = models.ImageField()

    def __str__(self):
        return self.name
