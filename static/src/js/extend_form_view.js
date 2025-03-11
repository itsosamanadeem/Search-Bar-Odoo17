/** @odoo-module **/
import { Component,useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

export class SearchBar extends Component {
    setup() {
        console.log("Search Bar Initialized!");
        this.state = useState({ query: "", results: [] });
        this.orm = useService("orm");
    }

    async onInputChange(event) {
        this.state.query = event.target.value;

        if (this.state.query.length > 2) {  
            const data = await this.orm.call(
                "product.pricelist",
                "search_product_items",
                [this.state.query]
            );

            this.state.results = data || [];  
        } else {
            this.state.results = [];
        }
    }
    selectProduct = (product)=> {
        console.log("Selected Product:", product);
        this.state.query = product.name;
        this.state.results = [];

        this.env.bus.trigger("scroll-to-product", { productId: product.id });
    }

}
SearchBar.template = "custom_search_bar_on_pricelist.search_bar";
export const searchbar = {
    component: SearchBar
}
registry.category("fields").add("search_bar", searchbar);
