import { useMemo } from "react";
import countries from "world-countries";

const VALID_REGIONS = ["Europe", "Asia", "Africa", "Oceania", "Americas"];

// mapping statico
const countryToContinent = Object.fromEntries(
    countries.map((c) => [c.cca2, c.region])
);

// totale per continente
const totalByContinent: Record<string, number> = countries.reduce(
    (acc, c) => {
        if (!acc[c.region]) acc[c.region] = 0;
        acc[c.region]++;
        return acc;
    },
    {} as Record<string, number>
);

export function useAnalytics(countriesState: Record<string, string>, selectedType: "visited" | "wishlist") {

    // GROUPED
    const grouped = useMemo(() => {
        const result: Record<string, string[]> = {};

        Object.entries(countriesState).forEach(([code, status]) => {
            if (status !== selectedType) return;

            const continent = countryToContinent[code];
            if (!continent || !VALID_REGIONS.includes(continent)) return;

            if (!result[continent]) result[continent] = [];
            result[continent].push(code);
        });

        return VALID_REGIONS.reduce((acc, region) => {
            if (result[region]) acc[region] = result[region];
            return acc;
        }, {} as Record<string, string[]>);
    }, [countriesState, selectedType]);

    // COUNT
    const selectedCount = useMemo(
        () => Object.values(countriesState).filter((v) => v === selectedType).length,
        [countriesState, selectedType]
    );

    // %
    const percentage = Math.round((selectedCount / 195) * 100);

    // CONTINENTS
    const worldRegionsVisited = Object.keys(grouped).length;

    // COUNT PER CONTINENTE
    const countByContinent = useMemo(() => {
        const result: Record<string, number> = {};

        Object.entries(countriesState).forEach(([code, status]) => {
            if (status !== selectedType) return;

            const continent = countryToContinent[code];
            if (!continent || !VALID_REGIONS.includes(continent)) return;

            result[continent] = (result[continent] || 0) + 1;
        });

        return result;
    }, [countriesState, selectedType]);

    // PROGRESS DATA
    const continentsData = VALID_REGIONS.map((continent) => ({
        continent,
        visited: countByContinent[continent] || 0,
        total: totalByContinent[continent] || 0,
    }));

    return {
        grouped,
        selectedCount,
        percentage,
        worldRegionsVisited,
        continentsData,
    };
}