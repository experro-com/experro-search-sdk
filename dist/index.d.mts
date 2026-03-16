declare class Analytics {
}

interface GetConfigProps {
    base: string;
    signal?: AbortSignal;
}
declare class ExperroClient {
    hydrate({ config, system, search }: {
        system: Record<string, any>;
        config?: Record<string, any>;
        search?: Record<string, any>;
    }): void;
    Init({ base, signal }: GetConfigProps): Promise<Record<string, any>>;
    GetExpConfig(): Record<string, any>;
}

declare class Search {
    constructor();
    private fetch;
    search(query: string, options?: {
        filters?: Record<string, any>;
        sort_by?: string;
        skip?: string;
        limit?: string;
    }): Promise<{
        _meta_: any;
        search_metadata: {
            query: string;
            filters: Record<string, any>;
            sort_by: string;
            limit: string;
            skip: string;
            start: number;
            end: any;
            total: any;
            page: number;
        };
        state: {
            query: string;
            filters: Record<string, any>;
            sort_by: string;
            skip: string;
            limit: string;
        };
        facets: any[];
        records: any[];
    }>;
    applyFilter(key: string, value: any): Promise<{
        _meta_: any;
        search_metadata: {
            query: string;
            filters: Record<string, any>;
            sort_by: string;
            limit: string;
            skip: string;
            start: number;
            end: any;
            total: any;
            page: number;
        };
        state: {
            query: string;
            filters: Record<string, any>;
            sort_by: string;
            skip: string;
            limit: string;
        };
        facets: any[];
        records: any[];
    }>;
    removeFilter(key: string, value: any): Promise<{
        _meta_: any;
        search_metadata: {
            query: string;
            filters: Record<string, any>;
            sort_by: string;
            limit: string;
            skip: string;
            start: number;
            end: any;
            total: any;
            page: number;
        };
        state: {
            query: string;
            filters: Record<string, any>;
            sort_by: string;
            skip: string;
            limit: string;
        };
        facets: any[];
        records: any[];
    }>;
    clearFilters(): Promise<{
        _meta_: any;
        search_metadata: {
            query: string;
            filters: Record<string, any>;
            sort_by: string;
            limit: string;
            skip: string;
            start: number;
            end: any;
            total: any;
            page: number;
        };
        state: {
            query: string;
            filters: Record<string, any>;
            sort_by: string;
            skip: string;
            limit: string;
        };
        facets: any[];
        records: any[];
    }>;
    applySort(sortBy: string): Promise<{
        _meta_: any;
        search_metadata: {
            query: string;
            filters: Record<string, any>;
            sort_by: string;
            limit: string;
            skip: string;
            start: number;
            end: any;
            total: any;
            page: number;
        };
        state: {
            query: string;
            filters: Record<string, any>;
            sort_by: string;
            skip: string;
            limit: string;
        };
        facets: any[];
        records: any[];
    }>;
    setPage(page: string | number): Promise<{
        _meta_: any;
        search_metadata: {
            query: string;
            filters: Record<string, any>;
            sort_by: string;
            limit: string;
            skip: string;
            start: number;
            end: any;
            total: any;
            page: number;
        };
        state: {
            query: string;
            filters: Record<string, any>;
            sort_by: string;
            skip: string;
            limit: string;
        };
        facets: any[];
        records: any[];
    }>;
    setPageSize(pageSize: string | number): Promise<{
        _meta_: any;
        search_metadata: {
            query: string;
            filters: Record<string, any>;
            sort_by: string;
            limit: string;
            skip: string;
            start: number;
            end: any;
            total: any;
            page: number;
        };
        state: {
            query: string;
            filters: Record<string, any>;
            sort_by: string;
            skip: string;
            limit: string;
        };
        facets: any[];
        records: any[];
    }>;
    reset(): Promise<{
        _meta_: any;
        search_metadata: {
            query: string;
            filters: Record<string, any>;
            sort_by: string;
            limit: string;
            skip: string;
            start: number;
            end: any;
            total: any;
            page: number;
        };
        state: {
            query: string;
            filters: Record<string, any>;
            sort_by: string;
            skip: string;
            limit: string;
        };
        facets: any[];
        records: any[];
    }>;
}

declare const Experro: ExperroClient;
declare const ExperroSearch: Search;
declare const ExperroAnalytics: Analytics;

export { Experro, ExperroAnalytics, ExperroSearch };
