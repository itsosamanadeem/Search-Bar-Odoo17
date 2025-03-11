/** @odoo-module **/
import { useBus } from "@web/core/utils/hooks";
import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class ProductPricelist extends Component {
    setup() {
        useBus(this.env.bus, "scroll-to-product", this.scrollToProduct);
    }

    scrollToProduct(event) {
        const productId = event.productId;
        console.log("Scrolling to Product ID:", productId);

        const productRow = document.querySelector(`[data-product-id="${productId}"]`);
        if (productRow) {
            productRow.scrollIntoView({ behavior: "smooth", block: "center" });
            productRow.classList.add("highlight");

            setTimeout(() => productRow.classList.remove("highlight"), 3000);
        }
    }
}
ProductPricelist.template = "custom_search_bar_on_pricelist.search_bar";
export const product_price_list = {
    component: ProductPricelist
}
registry.category("fields").add("scroll_effect", product_price_list);

