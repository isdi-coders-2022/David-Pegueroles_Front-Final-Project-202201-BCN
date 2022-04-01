import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CreateForm from "../../components/CreateForm/CreateForm";
import { navigationPositionAction } from "../../redux/actions/actionsCreators";

const FormPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navigationPositionAction(3));
  }, [dispatch]);

  return (
    <>
      <CreateForm />
    </>
  );
};

export default FormPage;
