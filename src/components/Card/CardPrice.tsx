interface CardPriceProps {
    price: number;
}

export const CardPrice = ({ price }: CardPriceProps) => {
    return (
        <div className="mt-4 flex items-end justify-end">
            <p className="text-heading-medium font-bold text-accent-green md:text-heading-medium">
                ${price}
            </p>
        </div>
    );
};
