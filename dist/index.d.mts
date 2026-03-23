declare class Analytics {
    injectAnalyticsScript(): void;
    triggerDefaultAnalyticsEvent: () => Promise<void>;
    initAnalytics(): void;
    isAnalyticsEnabled(): boolean;
    getCurrencyCode(): string;
    login(email: string): Promise<void>;
    logout(): Promise<void>;
    updateUserDetails(userDetails: any): Promise<true | undefined>;
    trackPageView(): void;
    trackEvent({ event_name, count, sum, dur, event_data }: any): Promise<void>;
    trackProductSearched({ search_location, search_term, no_of_results, sku, products_detail, search_source, used_suggestion, facets, request_id, page_depth, }: {
        search_location?: string;
        search_term: string | undefined;
        no_of_results: number | undefined;
        sku?: string[];
        products_detail?: string[] | undefined;
        used_suggestion?: string;
        search_source?: string;
        facets?: any;
        request_id?: string;
        page_depth?: string;
    }): Promise<void>;
    trackAcImpression({ no_of_results, ac_source, search_term, items }: any): Promise<void>;
    trackAcClick({ used_suggestion, ac_source, search_term }: any): Promise<void>;
    /**
     * Ensures analytics events are sent before navigation
     * Returns a promise that resolves after a short delay to allow events to be queued
     */
    ensureEventsSent(): Promise<void>;
    trackWidgetViewed({ no_of_results, products_detail, algorithm, rule, rule_type, widget_id, context_type, context_data, category, page_type, page_meta_id, page_display_name, variant }: any): Promise<void>;
    trackProductViewed({ sku, variant_sku, mode, price, name, product_categories, mode_details, product_option }: any): Promise<void>;
    trackProductVariantViewed({ sku, variant_sku, mode, price, name, product_categories, mode_details, product_option }: any): Promise<void>;
    trackCategoryViewed({ category_name, category_id, sku, products_detail, used_suggestion, search_source, facets, request_id, page_depth, }: {
        category_name: string;
        category_id: string;
        sku?: string[];
        products_detail?: string[] | undefined;
        used_suggestion?: string;
        search_source?: string;
        facets?: any;
        request_id?: string;
        page_depth?: string;
    }): Promise<void>;
    trackCollectionViewed({ collection_name, collection_id, sku, products_detail, used_suggestion, search_source, facets, request_id, page_depth, }: {
        collection_name: string;
        collection_id: string;
        sku?: string[];
        products_detail?: string[] | undefined;
        used_suggestion?: string;
        search_source?: string;
        facets?: any;
        request_id?: string;
        page_depth?: string;
    }): Promise<void>;
    trackProductAddedToCart(param: any): Promise<void>;
    trackProductRemovedFromCart(param: any): Promise<void>;
    trackCartViewed({ total_value, total_quantity, cart_id, base_amount, cart_amount, discount_amount, products }: any): Promise<void>;
    trackCheckoutInitiated({ total_value, cart_id, total_quantity, products }: any): Promise<void>;
    trackCheckoutCompleted({ total_value, cart_id, order_id, total_quantity, subtotal_tax, currency_code, base_handling_cost, base_shipping_cost, discount_amount, handling_cost_ex_tax, shipping_cost_ex_tax, subtotal_ex_tax, total_ex_tax, wrapping_cost_ex_tax, payment_method, shipping_method, products, }: any): Promise<void>;
    sendCheckoutAnalytics(payload: Record<string, any>): Promise<void>;
}

type RenameKeys<T, R extends Record<string, keyof T>> = Omit<T, R[keyof R]> & {
    [K in keyof R]: T[R[K]];
};
type TLayout = {
    page_layout: {
        selected_facets_position: "top" | "left" | "right" | "default" | "none";
    };
    product_grid_layout: {
        selected_default_product_listing_view: "grid_view" | "list_view";
        selected_number_of_products_per_grid_row: "1" | "2" | "3" | "4" | "5";
        pagination_style: {
            selected_pagination_style: "infinite_scroll" | "show_pages";
            infinite_scroll_meta: {
                selected_scroll_nature: "load_when_“load_more”_button_is_clicked" | "auto-load_on_page_scroll";
            };
        };
        selected_number_of_products_per_page: number;
        is_show_product_count_enabled: boolean;
    };
    product_card_layout: {
        product_card_template: "use_default_template";
        default_product_thumbnail_image: {
            item: string;
        };
        price_rounding_enabled: boolean;
        is_require_sign_to_view_enabled: boolean;
        product_attributes_to_show_dt: [
            {
                id: string;
                position: string | number;
                name: string;
                is_disabled: boolean;
                is_fixed: boolean;
            }
        ];
        config_action_buttons_dt: {
            is_color_swatches_enabled: boolean;
            is_image_rollover_enabled: boolean;
            selected_color_swatches: any;
            selected_color_swatches_value: string;
        };
        badges_on_product_card_dt: {
            is_on_sale_enabled: boolean;
            is_custom_badge_enabled: boolean;
            custom_badge_meta: string;
        };
    };
    sort_options: {
        is_relevance_enabled: boolean;
        is_featured_items_enabled: boolean;
        is_price_low_to_high_enabled: boolean;
        is_price_high_to_low_enabled: boolean;
        is_newest_item_enabled: boolean;
        is_oldest_item_enabled: boolean;
        is_custom_enabled: boolean;
        custom_meta: {
            custom_fields: [{}];
        };
    };
};
type TsearchResult = RenameKeys<TLayout, {
    product_card_layout_meta: "product_card_layout";
    product_grid_layout_meta: "product_grid_layout";
    sort_options_meta: "sort_options";
}> & {
    search_result_setting: {
        is_show_search_box_enabled: boolean;
        is_show_content_pages_enabled: boolean;
        search_result_page_url: string;
    };
    no_search_result_setting: {
        no_result_message: string;
        is_recommended_fallback_product_enabled: boolean;
        recommended_fallback_product_meta: {
            widget: string;
            selected_widget_count: number;
        };
    };
};
type Tautocomplete = {
    is_auto_complete_enabled: boolean;
    selected_autocomplete_start_at: number;
    popover_layout: {
        selected_autocomplete_layout: "vertical_layout" | "horizontal_layout" | "minimalistic_layout";
    };
    product_card_layout: {
        selected_product_listing_view: "grid_view" | "list_view";
        product_attributes_to_show: [
            {
                id: string;
                position: string | number;
                name: string;
                is_disabled: boolean;
                is_fixed: boolean;
            }
        ];
    };
    search_bar: {
        selected_placeholder_type: "manual_terms" | "popular_searches";
        search_suggestion: [
            {
                id: string;
                position: string | number;
                name: string;
            }
        ];
        popular_searches_count: {
            min: number;
            max: number;
        };
        selected_popular_searches_count: number;
    };
    search_suggestion: {
        is_product_suggestion_enabled: boolean;
        product_suggestion_meta: {
            selected_result_count: number;
            is_product_count_enabled: boolean;
        };
        is_search_term_suggestion_enabled: boolean;
        search_term_suggestion_meta: {
            selected_result_count: number;
            is_highlight_matches_in_result_enabled: boolean;
        };
        is_category_suggestion_enabled: boolean;
        category_suggestion_meta: {
            selected_result_count: number;
            is_product_count_enabled: boolean;
        };
        is_page_suggestion_enabled: boolean;
        page_suggestion_meta: {
            selected_result_count: number;
        };
        is_popular_searches_enabled: boolean;
        popular_searches_meta: {
            selected_result_count: number;
        };
        is_recent_searches_enabled: boolean;
        recent_searches_meta: {
            selected_result_count: number;
        };
        is_recommended_fallback_product_enabled: boolean;
        recommended_fallback_product_meta: {
            widget: string;
            selected_widget_count: number;
        };
        search_result_order: [
            {
                id: string;
                position: string | number;
                name: string;
            }
        ];
    };
    no_search_result_setting: {
        no_result_message: string;
        is_recommended_fallback_product_enabled: boolean;
        recommended_fallback_product_meta: {
            widget: string;
            selected_widget_count: number;
        };
    };
};
type TConfig = {
    layout: {
        desktop_view: TLayout;
        mobile_view: TLayout;
    };
    search_results: {
        desktop_view: TsearchResult;
        mobile_view: TsearchResult;
    };
    autocomplete: {
        desktop_view: Tautocomplete;
        mobile_view: Tautocomplete;
    };
    user_settings: {
        is_fallback_analytics_enabled?: false;
        recent_search_zero_result_enabled?: true;
        content_page_desc_count?: 200;
        product_desc_count?: 70;
        autocomplete_desc_count?: 50;
        is_search_redirect_enabled?: true;
        auto_search_redirect_enabled?: true;
        is_live?: false;
        is_analytics_enabled?: false;
        is_serving?: false;
        add_to_cart_behavior?: "redirect";
        spellcheck_enabled?: false;
        spellcheck_zero_result_enabled?: false;
        spellcheck_zero_suggestion_enabled?: false;
        category_sort_option?: [
            {
                categoryId: "global";
                sortBy: "is_featured:desc";
            },
            {
                categoryId: "321316683934";
                sortBy: "calculated_price:asc";
            },
            {
                categoryId: "321316651166";
                sortBy: "date_created:desc";
            }
        ];
        search_sort_option?: "relevance";
        compare_limit?: 4;
        did_you_mean_limit?: 1;
        show_matched_variant_image?: boolean;
        show_matched_variant_price?: boolean;
        matched_variant_redirection?: boolean;
        search_debounce_time?: 300;
        by_pass_merchandising?: boolean;
        field_parameter?: {
            autocomplete: string[];
            layout: string[];
            exclude: string[];
        };
        desktop_view?: {
            autocomplete_block_selector: string;
            autocomplete_input_selector: string;
            autocomplete_result_selector: string;
            autocomplete_replace_with: "icon" | "input";
            category_page_selector: string;
            search_page_selector: string;
            swatch_visibility_scope: "limited" | "all";
            swatch_visibility_type: "image" | "text" | "color";
            placeholder_animation_type: "typing" | "rotation" | "fade";
            placeholder_replacements: {
                instance: number;
                replaceable: boolean;
            }[];
        };
        mobile_view?: {
            autocomplete_block_selector: string;
            autocomplete_input_selector: string;
            autocomplete_result_selector: string;
            autocomplete_replace_with: "icon" | "input";
            category_page_selector: string;
            search_page_selector: string;
            swatch_visibility_scope: "limited" | "all";
            swatch_visibility_type: "image" | "text" | "color";
            placeholder_animation_type: "typing" | "rotation" | "fade";
            placeholder_replacements: {
                instance: number;
                replaceable: boolean;
            }[];
        };
    };
    translations_mapping: Record<string, string>;
};

interface GetConfigProps {
    base: string;
    signal?: AbortSignal;
    version?: string;
}
declare class ExperroClient {
    hydrate({ config, system, search }: {
        system: Record<string, any>;
        config?: Record<string, any>;
        search?: Record<string, any>;
    }): void;
    Init({ base, signal, version }: GetConfigProps): Promise<Record<string, any>>;
    GetExpConfig(): TConfig;
}

declare class Search {
    private keyConversion;
    private apiMiddleware;
    private scrollHandler;
    constructor();
    private resetState;
    private getDebounceTime;
    private fetchData;
    private fetch;
    search(query: string, options?: {
        filters?: Record<string, any>;
        sort_by?: string;
        page?: string;
        skip?: string;
        limit?: string;
    }): Promise<{
        search_metadata: {
            start: number;
            end: any;
            total: any;
            page: number;
            x_request_id: string;
            did_you_mean: never[];
            is_from_fallback: any;
        };
        state: {
            query: string;
            filters: Record<string, string[]>;
            sort_by: string;
            skip: string;
            limit: string;
        };
        facets: any[];
        records: any[];
        banners: any;
        layoutBanners: any[];
    }>;
    applyFilter(key: string, value: any): Promise<{
        search_metadata: {
            start: number;
            end: any;
            total: any;
            page: number;
            x_request_id: string;
            did_you_mean: never[];
            is_from_fallback: any;
        };
        state: {
            query: string;
            filters: Record<string, string[]>;
            sort_by: string;
            skip: string;
            limit: string;
        };
        facets: any[];
        records: any[];
        banners: any;
        layoutBanners: any[];
    }>;
    removeFilter(key: string, value: any): Promise<{
        search_metadata: {
            start: number;
            end: any;
            total: any;
            page: number;
            x_request_id: string;
            did_you_mean: never[];
            is_from_fallback: any;
        };
        state: {
            query: string;
            filters: Record<string, string[]>;
            sort_by: string;
            skip: string;
            limit: string;
        };
        facets: any[];
        records: any[];
        banners: any;
        layoutBanners: any[];
    }>;
    clearFilters(): Promise<{
        search_metadata: {
            start: number;
            end: any;
            total: any;
            page: number;
            x_request_id: string;
            did_you_mean: never[];
            is_from_fallback: any;
        };
        state: {
            query: string;
            filters: Record<string, string[]>;
            sort_by: string;
            skip: string;
            limit: string;
        };
        facets: any[];
        records: any[];
        banners: any;
        layoutBanners: any[];
    }>;
    applySort(sortBy: string): Promise<{
        search_metadata: {
            start: number;
            end: any;
            total: any;
            page: number;
            x_request_id: string;
            did_you_mean: never[];
            is_from_fallback: any;
        };
        state: {
            query: string;
            filters: Record<string, string[]>;
            sort_by: string;
            skip: string;
            limit: string;
        };
        facets: any[];
        records: any[];
        banners: any;
        layoutBanners: any[];
    }>;
    setPage(page: string | number): Promise<{
        search_metadata: {
            start: number;
            end: any;
            total: any;
            page: number;
            x_request_id: string;
            did_you_mean: never[];
            is_from_fallback: any;
        };
        state: {
            query: string;
            filters: Record<string, string[]>;
            sort_by: string;
            skip: string;
            limit: string;
        };
        facets: any[];
        records: any[];
        banners: any;
        layoutBanners: any[];
    }>;
    setPageSize(pageSize: string | number): Promise<{
        search_metadata: {
            start: number;
            end: any;
            total: any;
            page: number;
            x_request_id: string;
            did_you_mean: never[];
            is_from_fallback: any;
        };
        state: {
            query: string;
            filters: Record<string, string[]>;
            sort_by: string;
            skip: string;
            limit: string;
        };
        facets: any[];
        records: any[];
        banners: any;
        layoutBanners: any[];
    }>;
    reset(query?: string): Promise<{
        search_metadata: {
            start: number;
            end: any;
            total: any;
            page: number;
            x_request_id: string;
            did_you_mean: never[];
            is_from_fallback: any;
        };
        state: {
            query: string;
            filters: Record<string, string[]>;
            sort_by: string;
            skip: string;
            limit: string;
        };
        facets: any[];
        records: any[];
        banners: any;
        layoutBanners: any[];
    }>;
}

declare class Autocomplete {
    private keyConversion;
    private state;
    private apiMiddleware;
    private lastResults;
    private lastSuggestionResults;
    private lastProductResults;
    constructor();
    private resetState;
    private validateAutocomplete;
    private getRecentSearches;
    private saveRecentSearchTerm;
    private getDebounceTime;
    private fetchData;
    private fetch;
    search(query: string): Promise<Record<string, any>>;
    searchSuggestions(query: string): Promise<Record<string, any>>;
    searchProducts(query: string): Promise<Record<string, any>>;
}

declare const Experro: ExperroClient;
declare const ExperroSearch: Search;
declare const ExperroAutocomplete: Autocomplete;
declare const ExperroAnalytics: Analytics;

export { Experro, ExperroAnalytics, ExperroAutocomplete, ExperroSearch };
