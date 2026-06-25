// 1. Data Repositories (Fully Separated Categories with Official Numbers and Emails)
const brandData = {
    'Geionix': { 
        color: '#00838F', 
        email: 'care@geonix.in',
        items: [
            { category: 'Motherboard', helpline: '+91-99901-20066' },
            { category: 'Keyboard', helpline: '+91-99901-20066' },
            { category: 'SSD', helpline: '+91-99901-20066' },
            { category: 'M.2', helpline: '+91-99901-20066' },
            { category: 'NVMe', helpline: '+91-99901-20066' },
            { category: 'SATA HDD', helpline: '+91-99901-20066' },
            { category: 'Mouse', helpline: '+91-99901-20066' },
            { category: 'Barebone', helpline: '+91-99901-20066' },
            { category: 'PoE Switch', helpline: '+91-99901-20066' },
            { category: 'Cartridge', helpline: '+91-99901-20066' },
            { category: 'Memory Card', helpline: '+91-99901-20066' },
            { category: 'Pendrive', helpline: '+91-99901-20066' },
            { category: 'SMPS', helpline: '+91-99901-20066' },
            { category: 'Monitor', helpline: '+91-99901-20066' },
            { category: 'UPS', helpline: '+91-99901-20066' },
            { category: 'Battery', helpline: '+91-99901-20066' },
            { category: 'Processor', helpline: '+91-99901-20066' }
        ] 
    },
    'Digisol': { 
        color: '#2E7D32', 
        email: 'helpdesk@digisol.com',
        items: [
            { category: 'ONT', helpline: '1800-209-3444' },
            { category: 'Router', helpline: '1800-209-3444' },
            { category: 'PoE Switch', helpline: '1800-209-3444' },
            { category: 'Wi-Fi Dongle', helpline: '1800-209-3444' },
            { category: 'ONU', helpline: '1800-209-3444' }
        ] 
    },
    'Intel': { 
        color: '#1565C0', 
        email: 'support@intel.com',
        items: [
            { category: 'Processor', helpline: '000-800-440-2319' },
            { category: 'Motherboard', helpline: '000-800-440-2319' }
        ] 
    },
    'Intex': { 
        color: '#C62828', 
        email: 'info@intex.in',
        items: [
            { category: 'Keyboard', helpline: '0120-489-5555' },
            { category: 'Motherboard', helpline: '0120-489-5555' },
            { category: 'UPS', helpline: '0120-489-5555' },
            { category: 'Power Bank', helpline: '0120-489-5555' },
            { category: 'UPS Battery', helpline: '0120-489-5555' }
        ] 
    },
    'Gigabyte': { 
        color: '#E65100', 
        email: 'support@gigabyte.com (Primary support is via esupport.gigabyte.com)',
        items: [
            { category: 'Motherboard', helpline: '1800-22-0966' },
            { category: 'Graphic Card', helpline: '1800-22-0966' },
            { category: 'SMPS', helpline: '1800-22-0966' },
            { category: 'Monitor', helpline: '1800-22-0966' },
            { category: 'Liquid Cooler', helpline: '1800-22-0966' }
        ] 
    },
    'Adata': { 
        color: '#6A1B9A', 
        email: 'support_in@adata.com',
        items: [
            { category: 'Gaming RAM', helpline: '+91-98701-93819' },
            { category: 'SSD', helpline: '+91-98701-93819' }
        ] 
    },
    'EVM': { 
        color: '#00695C', 
        email: 'cc@bestevm.com / info@bestevm.com',
        items: [
            { category: 'Internal SSD', helpline: '1800-102-0432' },
            { category: 'Portable SSD', helpline: '1800-102-0432' },
            { category: 'Desktop RAM', helpline: '1800-102-0432' },
            { category: 'Laptop RAM', helpline: '1800-102-0432' },
            { category: 'Server RAM', helpline: '1800-102-0432' },
            { category: 'Pendrive', helpline: '1800-102-0432' },
            { category: 'Memory Card', helpline: '1800-102-0432' },
            { category: 'Motherboard', helpline: '1800-102-0432' },
            { category: 'Graphic Card', helpline: '1800-102-0432' },
            { category: 'Cabinet', helpline: '1800-102-0432' },
            { category: 'SMPS', helpline: '1800-102-0432' },
            { category: 'Cooling Fan', helpline: '1800-102-0432' },
            { category: 'LED Monitor', helpline: '1800-102-0432' },
            { category: 'Keyboard', helpline: '1800-102-0432' },
            { category: 'Mouse', helpline: '1800-102-0432' },
            { category: 'Line Interactive UPS', helpline: '1800-102-0432' },
            { category: 'Type-C Docking Station', helpline: '1800-102-0432' },
            { category: 'USB Hub', helpline: '1800-102-0432' },
            { category: 'Monitor Stand', helpline: '1800-102-0432' },
            { category: 'Network Cable', helpline: '1800-102-0432' },
            { category: 'Wi-Fi Dongle', helpline: '1800-102-0432' },
            { category: 'Power Bank', helpline: '1800-102-0432' },
            { category: 'Wall Charger', helpline: '1800-102-0432' },
            { category: 'Car Charger', helpline: '1800-102-0432' },
            { category: 'Wireless Charger', helpline: '1800-102-0432' },
            { category: 'Cable & Adapter', helpline: '1800-102-0432' },
            { category: 'Mobile Cooler', helpline: '1800-102-0432' },
            { category: 'Laptop Cooling Pad', helpline: '1800-102-0432' },
            { category: 'TWS Earbuds', helpline: '1800-102-0432' },
            { category: 'Bluetooth Neckband', helpline: '1800-102-0432' },
            { category: 'Portable Speaker', helpline: '1800-102-0432' },
            { category: 'Type-C Earphone', helpline: '1800-102-0432' },
            { category: 'Audio Aux Cable', helpline: '1800-102-0432' },
            { category: 'Smartwatch', helpline: '1800-102-0432' },
            { category: 'Toner Cartridge', helpline: '1800-102-0432' },
            { category: 'Barcode Scanner', helpline: '1800-102-0432' }
        ] 
    },
    'iBall': { 
        color: '#AD1457', 
        email: 'support@iball.co.in',
        items: [
            { category: 'Keyboard', helpline: '1860-266-6409' },
            { category: 'Mouse', helpline: '1860-266-6409' },
            { category: 'Keyboard & Mouse Combo', helpline: '1860-266-6409' },
            { category: 'Webcam', helpline: '1860-266-6409' },
            { category: 'Soundbar', helpline: '1860-266-6409' },
            { category: 'Portable Speaker', helpline: '1860-266-6409' },
            { category: 'Desktop Speaker', helpline: '1860-266-6409' },
            { category: 'Cabinet / Chassis', helpline: '1860-266-6409' },
            { category: 'UPS', helpline: '1860-266-6409' },
            { category: 'Barcode Scanner', helpline: '1860-266-6409' },
            { category: 'USB Dongle', helpline: '1860-266-6409' },
            { category: 'USB Hub', helpline: '1860-266-6409' },
            { category: 'Laptop Stand', helpline: '1860-266-6409' }
        ] 
    },
    
    /* Kaizen Brands */
    'Biostar': { color: '#C62828', email: 'support@biostar.com.tw', items: [{ category: 'Motherboard', helpline: '022-40065442' }] },
    'BRYT': { 
        color: '#8E24AA', 
        email: 'admin@brytbazaar.com (Also reachable via distributor: ganesh.yadav@vishwasmultitech.com)',
        items: [
            { category: 'Card Reader', helpline: '022-40065442' },
            { category: 'CF Express', helpline: '022-40065442' },
            { category: 'RAM', helpline: '022-40065442' },
            { category: 'SSD M.2', helpline: '022-40065442' },
            { category: 'Micro SSD', helpline: '022-40065442' },
            { category: 'NVMe', helpline: '022-40065442' },
            { category: 'SATA SD Card', helpline: '022-40065442' },
            { category: 'USB', helpline: '022-40065442' },
            { category: 'USB Hub', helpline: '022-40065442' }
        ] 
    },
    'Cooler Master': { 
        color: '#5D4037', 
        email: 'support@coolermaster.com (Most queries are handled via their Fanzone ticketing system.)',
        items: [
            { category: 'CM Combo', helpline: '022-40065442' },
            { category: 'CM Cooler', helpline: '022-40065442' },
            { category: 'CM Fan', helpline: '022-40065442' },
            { category: 'CM Headset', helpline: '022-40065442' },
            { category: 'CM Keyboard', helpline: '022-40065442' },
            { category: 'CM Monitor', helpline: '022-40065442' },
            { category: 'CM Mouse', helpline: '022-40065442' },
            { category: 'CM Power Supply', helpline: '022-40065442' },
            { category: 'Strom Controller', helpline: '022-40065442' }
        ] 
    },
    'Corsair': { 
        color: '#F9A825', 
        email: 'support@corsair.com (Often redirects to their online ticketing portal.)',
        items: [
            { category: 'Cooling Accessory', helpline: '022-40065442' },
            { category: 'Casing', helpline: '022-40065442' },
            { category: 'Cooler', helpline: '022-40065442' },
            { category: 'Fan', helpline: '022-40065442' },
            { category: 'Headset', helpline: '022-40065442' },
            { category: 'Hydro X Series', helpline: '022-40065442' },
            { category: 'Keyboard', helpline: '022-40065442' },
            { category: 'Link', helpline: '022-40065442' },
            { category: 'Memory', helpline: '022-40065442' },
            { category: 'Monitor', helpline: '022-40065442' },
            { category: 'Mouse Pad', helpline: '022-40065442' },
            { category: 'Pendrive', helpline: '022-40065442' },
            { category: 'SMPS', helpline: '022-40065442' },
            { category: 'SSD', helpline: '022-40065442' },
            { category: 'Streaming', helpline: '022-40065442' }
        ] 
    },
    'Crucial': { 
        color: '#1565C0', 
        email: 'crucial.service@micron.com',
        items: [
            { category: 'SSD', helpline: '022-40065442' },
            { category: 'RAM', helpline: '022-40065442' }
        ] 
    },
    'Creative': { color: '#E64A19', email: 'support@creative.com', items: [{ category: 'Audio Solutions', helpline: '022-40065442' }] },
    'GALAX': { 
        color: '#00838F', 
        email: 'support@galax.com',
        items: [
            { category: 'Graphic Card', helpline: '022-40065442' },
            { category: 'Motherboard', helpline: '022-40065442' }
        ] 
    },
    'Inno 3D': { 
        color: '#558B2F', 
        email: 'support@inno3d.com',
        items: [
            { category: 'Graphic Card', helpline: '022-40065442' }
        ] 
    },
    'Lexar': { 
        color: '#283593', 
        email: 'support@lexar.com / APAC Region: support-apac@lexar.com',
        items: [
            { category: 'SSD', helpline: '022-40065442' },
            { category: 'Pendrive', helpline: '022-40065442' },
            { category: 'MicroSD Card', helpline: '022-40065442' },
            { category: 'M.2', helpline: '022-40065442' },
            { category: 'NVMe', helpline: '022-40065442' },
            { category: 'Card Reader', helpline: '022-40065442' }
        ] 
    },
    'Mercury': { 
        color: '#7B1FA2', 
        email: 'Not publicly listed',
        items: [
            { category: 'Graphic Card', helpline: '022-40065442' },
            { category: 'Motherboard', helpline: '022-40065442' },
            { category: 'Mouse', helpline: '022-40065442' },
            { category: 'TFT Monitor', helpline: '022-40065442' },
            { category: 'SMPS', helpline: '022-40065442' },
            { category: 'Keyboard', helpline: '022-40065442' }
        ] 
    },
    'Micron': { 
        color: '#0277BD', 
        email: 'crucial.service@micron.com (Consumer queries are routed through Crucial.)',
        items: [
            { category: 'RAM', helpline: '022-40065442' },
            { category: 'SSD', helpline: '022-40065442' }
        ] 
    },
    'Nextron': { 
        color: '#9E9D24', 
        email: 'sales@nxelectronics.com',
        items: [
            { category: 'RAM', helpline: '022-40065442' },
            { category: 'Graphic Card', helpline: '022-40065442' },
            { category: 'SSD', helpline: '022-40065442' },
            { category: 'Motherboard', helpline: '022-40065442' },
            { category: 'M.2', helpline: '022-40065442' }
        ] 
    },
    'Sapphire': { 
        color: '#C2185B', 
        email: 'Not publicly listed',
        items: [
            { category: 'GPU', helpline: '022-40065442' }
        ] 
    },
    'Syrotech': { 
        color: '#F57F17', 
        email: 'support@syrotech.com',
        items: [
            { category: 'ONT', helpline: '022-40065442' },
            { category: 'PoE Switch', helpline: '022-40065442' },
            { category: 'Media Converter', helpline: '022-40065442' },
            { category: 'ONU', helpline: '022-40065442' }
        ] 
    },
    'Verbatim': { 
        color: '#4E342E', 
        email: 'techsupport@verbatim.com',
        items: [
            { category: 'Adapter', helpline: '022-40065442' },
            { category: 'SD Card', helpline: '022-40065442' },
            { category: 'Disk Drive', helpline: '022-40065442' },
            { category: 'Cable', helpline: '022-40065442' },
            { category: 'M.2', helpline: '022-40065442' },
            { category: 'SATA', helpline: '022-40065442' },
            { category: 'NVMe', helpline: '022-40065442' }
        ] 
    },
    'Zotac': { 
        color: '#FBC02D', 
        email: 'support@zotac.com',
        items: [
            { category: 'Graphic Card', helpline: '022-40065442' }
        ] 
    },

    /* Vishwas Brands */
    'Blue Print': { color: '#0288D1', email: 'Not publicly listed (Best reached via your local seller or distributor.)', items: [{ category: 'Thermal Printer', helpline: '+91-7875770070' }] },
    'Cellecore': { 
        color: '#C62828', 
        email: 'info@cellecor.com / cs@cellecor.in',
        items: [
            { category: 'TV', helpline: '+91-7875770070' },
            { category: 'AC', helpline: '+91-7875770070' },
            { category: 'Washing Machine', helpline: '+91-7875770070' }
        ] 
    },
    'Kratos': { 
        color: '#AD1457', 
        email: 'support@kratos.co.uk',
        items: [
            { category: 'BT Neckband', helpline: '+91-7875770070' },
            { category: 'Car Charger', helpline: '+91-7875770070' },
            { category: 'Charger', helpline: '+91-7875770070' },
            { category: 'Data Cable', helpline: '+91-7875770070' },
            { category: 'Power Bank', helpline: '+91-7875770070' },
            { category: 'TWS', helpline: '+91-7875770070' },
            { category: 'Watch', helpline: '+91-7875770070' },
            { category: 'Speaker', helpline: '+91-7875770070' }
        ] 
    },
    'Portonics': { 
        color: '#1565C0', 
        email: 'Not publicly listed',
        items: [
            { category: 'Speaker', helpline: '+91-7875770070' }
        ] 
    },
    'Snapup': { 
        color: '#FF8F00', 
        email: 'Not publicly listed',
        items: [
            { category: 'TWS', helpline: '+91-7875770070' },
            { category: 'Headphone', helpline: '+91-7875770070' },
            { category: 'Neckband', helpline: '+91-7875770070' },
            { category: 'Speaker', helpline: '+91-7875770070' },
            { category: 'Watch', helpline: '+91-7875770070' },
            { category: 'Mixer Grinder', helpline: '+91-7875770070' }
        ] 
    },
    'Tag': { 
        color: '#689F38', 
        email: 'Varies by product type (Often requires contacting the original retailer for RMA.)',
        items: [
            { category: 'Gamepad', helpline: '+91-7875770070' },
            { category: 'Keyboard', helpline: '+91-7875770070' },
            { category: 'Mouse', helpline: '+91-7875770070' },
            { category: 'Speaker', helpline: '+91-7875770070' },
            { category: 'Mouse Pad', helpline: '+91-7875770070' },
            { category: 'Cooling Fan', helpline: '+91-7875770070' },
            { category: 'Spike Guard', helpline: '+91-7875770070' },
            { category: 'USB Hub', helpline: '+91-7875770070' },
            { category: 'Wi-Fi Adapter', helpline: '+91-7875770070' }
        ] 
    },
    'Team Group': { 
        color: '#8E24AA', 
        email: 'rma@teamgroup.com.tw',
        items: [
            { category: 'SSD', helpline: '+91-7875770070' },
            { category: 'RAM', helpline: '+91-7875770070' }
        ] 
    },
    'Rapoo': { 
        color: '#37474F', 
        email: 'Not publicly listed',
        items: [
            { category: 'Keyboard', helpline: '+91-7875770070' },
            { category: 'Mouse', helpline: '+91-7875770070' },
            { category: 'Headphone', helpline: '+91-7875770070' }
        ] 
    },
    'Lappies': { color: '#3949AB', email: 'Not publicly listed (Best reached via your local seller or distributor.)', items: [{ category: 'Laptop Spares', helpline: '+91-7875770070' }] },
    'Toreti': { color: '#00897B', email: 'info@toreto.in', items: [{ category: 'Monitor', helpline: '+91-7875770070' }] },

    /* MAARS Brands */
    'Pebble': { 
        color: '#5D4037', 
        email: 'support@pebblecart.com',
        items: [
            { category: 'Neckband', helpline: '+91-11-45380573' },
            { category: 'Watch', helpline: '+91-11-45380573' },
            { category: 'Keyboard', helpline: '+91-11-45380573' }
        ] 
    },
    'Philips': { color: '#1976D2', email: 'support@philips.com', items: [{ name: 'Onsite Call Available', helpline: '+91-11-45380573' }] },
    'Truke': { color: '#388E3C', email: 'support@eccentricindia.com', items: [{ category: 'TWS Earbuds', helpline: '+91-11-45380573' }] }
};

// Hub data is now empty since all brands are moved to main grid
const hubData = {};

let currentHub = null;

// 2. Build-In Loading Animation Controller
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if(loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }, 1600);
    }
});

// 3. Search Filter Function
function filterBrands() {
    const input = document.getElementById('brand-search').value.toLowerCase();
    const mainGrid = document.getElementById('main-grid-container');
    const cards = mainGrid.querySelectorAll('.brand-card');

    cards.forEach(card => {
        const brandName = card.querySelector('h3').innerText.toLowerCase();
        if (brandName.includes(input)) {
            card.style.display = 'flex'; 
        } else {
            card.style.display = 'none';
        }
    });
}

// 4. Navigation Functions
function showProducts(brand) {
    const brandDataObj = brandData[brand];
    renderProducts(brand, brandDataObj.items, 'main', brandDataObj.color);
}

function renderProducts(brandName, productsArray, context, brandColor) {
    const mainGrid = document.getElementById('main-grid-container');
    const productDisplay = document.getElementById('product-display');
    const productList = document.getElementById('product-list');
    const title = document.getElementById('selected-brand-title');
    const backBtn = document.getElementById('product-back-btn');

    mainGrid.style.display = 'none';
    
    title.innerHTML = `<span style="color: ${brandColor}">${brandName}</span> Support Categories`;
    
    backBtn.onclick = backToMainGrid;
    backBtn.innerHTML = `<i class="fas fa-arrow-left"></i> Back to All Partners`;

    productList.innerHTML = '';
    productsArray.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card product-card visible';
        card.style.borderTopColor = brandColor; 
        
        // Render only the category name or the custom name (like Philips)
        const displayTitle = item.category ? item.category : item.name;

        // No individual support link inside card anymore!
        card.innerHTML = `
            <h3 style="margin-bottom: 0;">${displayTitle}</h3>
        `;
        productList.appendChild(card);
    });

    // Populate Customer Care Section
    const brandDataObj = brandData[brandName];
    const careNumber = productsArray[0].helpline;
    const careEmail = brandDataObj && brandDataObj.email ? brandDataObj.email : 'Email not publicly listed.';
    
    const careLink = document.getElementById('brand-care-number');
    const careSpan = careLink.querySelector('span');
    const careEmailDisplay = document.getElementById('brand-care-email');
    
    careSpan.innerText = careNumber;
    careEmailDisplay.innerText = careEmail;
    
    // Check if there are numbers to create a clickable tel: link
    if(/\d/.test(careNumber)) {
        const cleanNumber = careNumber.replace(/[^\d+]/g, ''); // leaves only numbers and '+'
        careLink.href = `tel:${cleanNumber}`;
    } else {
        careLink.href = "#"; 
    }

    productDisplay.style.display = 'block';
    productDisplay.classList.remove('hidden');
    productDisplay.classList.add('visible');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToMainGrid() {
    document.getElementById('product-display').style.display = 'none';
    const main = document.getElementById('main-grid-container');
    main.style.display = 'block';
    main.style.animation = 'fadeInUp 0.4s forwards';
    
    // Clear the search bar so all brands show up again
    const searchInput = document.getElementById('brand-search');
    if (searchInput) {
        searchInput.value = '';
        filterBrands(); 
    }
}

window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < window.innerHeight - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});
