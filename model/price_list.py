from odoo import api, fields, models
import logging
_logger = logging.getLogger(__name__)

class ProductPricelist(models.Model):
    _inherit = "product.pricelist"

    search_product = fields.Char(string="Search Product")

    @api.model
    def search_product_items(self, search_query):
        """Search for products in pricelist items based on query"""
        if not search_query:
            return []  

        # print(f"Received search query: {search_query}")  
        _logger.info(f"Received search query: {search_query}")
        
        pricelist_items = self.env['product.pricelist.item'].search([
            ('product_tmpl_id.name', 'ilike', search_query) 
        ])

        print(f"Found {len(pricelist_items)} products")  
        return [
            {
                'id': item.id,
                'name': item.product_tmpl_id.name,
                'price': item.price
            }
            for item in pricelist_items
        ]
