document.getElementById('auditForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Form se values uthana
    const inputs = this.querySelectorAll('input');
    const businessName = inputs[0].value;
    const websiteUrl = inputs[1].value;
    const clientWhatsapp = inputs[2].value;

    // Bahrain ka target WhatsApp number (+973 3536 3541 without spaces/plus)
    const targetPhone = "97335363541";

    // WhatsApp message format banana
    const message = `Hello MapRanker Team,%0A%0AI want a Free Google Maps Audit for my business.%0A%0A*Business Name:* ${encodeURIComponent(businessName)}%0A*Website/Map Link:* ${encodeURIComponent(websiteUrl)}%0A*My WhatsApp:* ${encodeURIComponent(clientWhatsapp)}`;

    // Direct WhatsApp chat open karna
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Form reset karna
    this.reset();
});