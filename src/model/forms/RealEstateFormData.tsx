type RealEstateFormData = {
    location: string,
    surfaceArea: number,
    price: number,
    transactionType: string,
    realEstateType: string,
    images: string[];
    agencyId: number | null
}

export default RealEstateFormData;