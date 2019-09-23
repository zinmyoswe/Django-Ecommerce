from django import forms
from django_countries.fields import CountryField


class CheckoutForm(forms.Form):
    street_address = forms.CharField()
    apartment_address = forms.CharField(required=False)
    country = CountryField(blank_label='(select country)')
    zip = forms.CharField()
    same_billing_address = forms.BooleanField(widget=forms.CheckboxInput())
    save_info = forms.BooleanField(widget=forms.CheckboxInput())
    payment_option = forms.BooleanField(widget=forms.RadioSelect())
