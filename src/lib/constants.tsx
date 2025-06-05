export interface stepI {
    id: number,
    title: string,
    description: string,
}

export interface ISkip {
    id: number;
    size: number;
    hire_period_days: number;
    transport_cost: number | null;
    per_tonne_cost: number | null;
    price_before_vat: number;
    vat: number;
    postcode: string;
    area: string;
    forbidden: boolean;
    created_at: string;
    updated_at: string;
    allowed_on_road: boolean;
    allows_heavy_waste: boolean;
    image_url?: string;
    name?: string;
    description?: string;
    price?: number;
};

export const steps: stepI[] = [
    {
        id: 1,
        title: 'Post code',
        description: 'SKIP HIRE With A Difference',
    },
    {
        id: 2,
        title: 'Waste type',
        description: 'What type of waste are you disposing of?'
    },

    {
        id: 3,
        title: 'Select Skip',
        description: 'Select the skip size that best suits your needs',

    },
    {
        id: 4,
        title: 'Permit Check',
        description: 'Where will the skip be placed?',

    },
    {
        id: 5,
        title: 'Delivery Date',
        description: 'When do you need the skip delivered?',
    },
    {
        id: 6,
        title: 'Payment',
        description: 'Enter your payment details to complete the order',

    }
]