{
    'name': 'Search bar',
    'author': 'Osama Nadeem',
    # 'website': 'https://www.yourcompany.com',
    # 'version': '17.0.1.2',  # Uncommented the version
    'category': 'Product',
    'sequence': '-100',
    'license': 'LGPL-3',
    'depends': ['product','web'],
    'data': [
        "view/inherit_price_list.xml"
    ],
    'assets': {
        'web.assets_backend': [
            'custom_search_bar_on_pricelist/static/src/*/*.js',
            'custom_search_bar_on_pricelist/static/src/*/*.xml',
            'custom_search_bar_on_pricelist/static/src/*/*.css',
        ],
    },
    'demo': [
        # 'demo/hr_employee_demo.xml'  Example of a demo file for initial data
    ],
    'installable': True,
    'application': True,
    'auto_install': True,
}
