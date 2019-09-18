from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView, DetailView
from django.shortcuts import redirect
from django.utils import timezone
from .models import Item, OrderItem, Order

# Create your views here.


class HomeView(ListView):
    model = Item
    template_name = "index.html"


def home(request):
    context = {
        'items': Item.objects.all()
    }
    return render(request, "index.html", context)


class ItemDetailView(DetailView):
    model = Item
    template_name = "product-detail.html"


def products(request):
    context = {
        'items': Item.objects.all()
    }
    return render(request, "product-detail.html", context)


def add_to_cart(request, slug):
    item = get_object_or_404(Item, slug=slug)
    order_item = OrderItem.objects.create(item=item)
    order_qs = Order.objects.filter(user=request.user, ordered=False)
    if order_qs.exists():
        order = order_qs[0]
        if order.items.filter(item__slug=item.slug).exists():
            order_item.quantity += 1
            order_item.save()
        else:
            order.items.add(order_item)
    else:
        ordered_date = timezone.now()
        order = Order.objects.create(
            user=request.user, ordered_date=ordered_date)
        order.items.add(order_item)
    return redirect("core:product", slug=slug)
