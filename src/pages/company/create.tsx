import { Modal } from "antd";
import { CompanyList } from "./list";
import { useModalForm } from "@refinedev/antd";
import { useGo } from "@refinedev/core";
import { CREATE_COMPANY_MUTATION } from "@/graphql/mutations";

export const CreateCompany = () => {
  const go = useGo();

  // const goToListPage = () => {
  //   go({
  //     to: { resource: 'companies', action: 'list' },
  //     options: { keepQuery: true },
  //     type: 'replace',
  //   });
  // };

  const { formProps, modalProps } = useModalForm({
    action: "create",
    defaultVisible: true,
    resource: "companies",
    redirect: false,
    mutationMode: "pessimistic",
    onMutationSuccess: goToListPage,
    meta: {
      gqlMutation: CREATE_COMPANY_MUTATION,
    },
  });

  return (
    <CompanyList>
      <Modal></Modal>
    </CompanyList>
  );
};
