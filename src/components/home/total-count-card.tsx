type Props = {
  resource: "companies" | "contacts" | "deals";
  isLoading: boolean;
  totalCount: number;
};

const TotalCountCard = ({ resource, isLoading, totalCount }: Props) => {
  return <div>TotalCountCard Component c:</div>;
};

export default TotalCountCard;
