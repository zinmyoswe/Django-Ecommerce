from django import template
from django.utils.safestring import mark_safe

from core.models import Category

register = template.Library()


@register.simple_tag
def categories():
    items = Category.objects.filter(is_active=True).order_by('title')
    items_li = ""
    for i in items:
        items_li += """<li><a href="{}">{}</a></li>""".format(i.slug, i.title)
    return mark_safe(items_li)
