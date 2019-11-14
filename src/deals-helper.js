export const findDeal = (deals = [], dealId) =>
  deals.find(deal => deal.id === dealId)
