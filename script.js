// 1. Data Repositories (Fully Separated Categories with Official Numbers)
const brandData = {
    'Geionix': { 
        color: '#00838F', 
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
        items: [
            { category: 'Processor', helpline: '000-800-440-2319' },
            { category: 'Motherboard', helpline: '000-800-440-2319' }
        ] 
    },
    'Intex': { 
        color: '#C62828', 
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
        items: [
            { category: 'Gaming RAM', helpline: '+91-98701-93819' },
            { category: 'SSD', helpline: '+91-98701-93819' }
        ] 
    },
    'EVM': { 
        color: '#00695C', 
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
    }
};

const hubData = {
    'kaizen': {
        title: 'Kaizen Info Serve',
        color: '#D84315', 
        brands: {
            'Biostar': { color: '#C62828', items: [{ category: 'Motherboard', helpline: '022-40065442' }] },
            'BRYT': { 
                color: '#8E24AA', 
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
                items: [
                    { category: 'SSD', helpline: '022-40065442' },
                    { category: 'RAM', helpline: '022-40065442' }
                ] 
            },
            'Creative': { color: '#E64A19', items: [{ category: 'Audio Solutions', helpline: '022-40065442' }] },
            'GALAX': { 
                color: '#00838F', 
                items: [
                    { category: 'Graphic Card', helpline: '022-40065442' },
                    { category: 'Motherboard', helpline: '022-40065442' }
                ] 
            },
            'Inno 3D': { 
                color: '#558B2F', 
                items: [
                    { category: 'Graphic Card', helpline: '022-40065442' }
                ] 
            },
            'Lexar': { 
                color: '#283593', 
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
                items: [
                    { category: 'RAM', helpline: '022-40065442' },
                    { category: 'SSD', helpline: '022-40065442' }
                ] 
            },
            'Nextron': { 
                color: '#9E9D24', 
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
                items: [
                    { category: 'GPU', helpline: '022-40065442' }
                ] 
            },
            'Syrotech': { 
                color: '#F57F17', 
                items: [
                    { category: 'ONT', helpline: '022-40065442' },
                    { category: 'PoE Switch', helpline: '022-40065442' },
                    { category: 'Media Converter', helpline: '022-40065442' },
                    { category: 'ONU', helpline: '022-40065442' }
                ] 
            },
            'Verbatim': { 
                color: '#4E342E', 
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
                items: [
                    { category: 'Graphic Card', helpline: '022-40065442' }
                ] 
            }
        }
    },
    'vishwas': {
        title: 'Vishwas Multitech',
        color: '#2E7D32', 
        brands: {
            'Blue Print': { color: '#0288D1', items: [{ category: 'Thermal Printer', helpline: '+91-7875770070' }] },
            'Cellecore': { 
                color: '#C62828', 
                items: [
                    { category: 'TV', helpline: '+91-7875770070' },
                    { category: 'AC', helpline: '+91-7875770070' },
                    { category: 'Washing Machine', helpline: '+91-7875770070' }
                ] 
            },
            'Kratos': { 
                color: '#AD1457', 
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
                items: [
                    { category: 'Speaker', helpline: '+91-7875770070' }
                ] 
            },
            'Snapup': { 
                color: '#FF8F00', 
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
                items: [
                    { category: 'SSD', helpline: '+91-7875770070' },
                    { category: 'RAM', helpline: '+91-7875770070' }
                ] 
            },
            'Rapoo': { 
                color: '#37474F', 
                items: [
                    { category: 'Keyboard', helpline: '+91-7875770070' },
                    { category: 'Mouse', helpline: '+91-7875770070' },
                    { category: 'Headphone', helpline: '+91-7875770070' }
                ] 
            },
            'Lappies': { color: '#3949AB', items: [{ category: 'Laptop Spares', helpline: '+91-7875770070' }] },
            'Toreti': { color: '#00897B', items: [{ category: 'Monitor', helpline: '+91-7875770070' }] }
        }
    },
    'maara': {
        title: 'MAARS E Services',
        color: '#1565C0', 
        brands: {
            'Pebble': { 
                color: '#5D4037', 
                items: [
                    { category: 'Neckband', helpline: '+91-11-45380573' },
                    { category: 'Watch', helpline: '+91-11-45380573' },
                    { category: 'Keyboard', helpline: '+91-11-45380573' }
                ] 
            },
            'Philips': { color: '#1976D2', items: [{ name: 'Onsite Call Available', helpline: '+91-11-45380573' }] },
            'Truke': { color: '#388E3C', items: [{ category: 'TWS Earbuds', helpline: '+91-11-45380573' }] }
        }
    }
};

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

// 3. Navigation Functions
function showHubBrands(hubKey) {
    currentHub = hubKey;
    const mainGrid = document.getElementById('main-grid-container');
    const hubDisplay = document.getElementById('hub-brands-display');
    const hubGrid = document.getElementById('hub-brand-grid');
    const hubTitle = document.getElementById('hub-title');

    mainGrid.style.display = 'none';
    hubTitle.innerHTML = `<span style="color: ${hubData[hubKey].color};">${hubData[hubKey].title}</span>`;
    hubGrid.innerHTML = '';

    Object.keys(hubData[hubKey].brands).forEach(brand => {
        const brandInfo = hubData[hubKey].brands[brand];
        const card = document.createElement('div');
        card.className = 'card brand-card';
        card.style.borderTopColor = brandInfo.color;
        card.onclick = () => showHubProducts(brand);
        card.innerHTML = `<h3 style="color: ${brandInfo.color};">${brand}</h3>`;
        hubGrid.appendChild(card);
    });

    hubDisplay.style.display = 'block';
    hubDisplay.classList.remove('hidden');
    hubDisplay.classList.add('visible');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHubProducts(brand) {
    const brandDataObj = hubData[currentHub].brands[brand];
    renderProducts(brand, brandDataObj.items, 'hub', brandDataObj.color);
}

function showProducts(brand) {
    const brandDataObj = brandData[brand];
    renderProducts(brand, brandDataObj.items, 'main', brandDataObj.color);
}

function renderProducts(brandName, productsArray, context, brandColor) {
    const mainGrid = document.getElementById('main-grid-container');
    const hubDisplay = document.getElementById('hub-brands-display');
    const productDisplay = document.getElementById('product-display');
    const productList = document.getElementById('product-list');
    const title = document.getElementById('selected-brand-title');
    const backBtn = document.getElementById('product-back-btn');

    mainGrid.style.display = 'none';
    hubDisplay.style.display = 'none';
    hubDisplay.classList.remove('visible');

    title.innerHTML = `<span style="color: ${brandColor}">${brandName}</span> Support Categories`;
    
    if(context === 'hub') {
        backBtn.onclick = () => showHubBrands(currentHub);
        backBtn.innerHTML = `<i class="fas fa-arrow-left"></i> Back to Hub`;
    } else {
        backBtn.onclick = backToMainGrid;
        backBtn.innerHTML = `<i class="fas fa-arrow-left"></i> Back to Main Partners`;
    }

    productList.innerHTML = '';
    productsArray.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card product-card visible';
        card.style.borderTopColor = brandColor; 
        
        // Render only the category name or the custom name (like Philips)
        const displayTitle = item.category ? item.category : item.name;

        card.innerHTML = `
            <h3>${displayTitle}</h3>
            <div class="support-link"><i class="fas fa-headset"></i><span>${item.helpline}</span></div>
        `;
        productList.appendChild(card);
    });

    productDisplay.style.display = 'block';
    productDisplay.classList.remove('hidden');
    productDisplay.classList.add('visible');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToMainGrid() {
    document.getElementById('hub-brands-display').style.display = 'none';
    document.getElementById('product-display').style.display = 'none';
    const main = document.getElementById('main-grid-container');
    main.style.display = 'block';
    main.style.animation = 'fadeInUp 0.4s forwards';
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
