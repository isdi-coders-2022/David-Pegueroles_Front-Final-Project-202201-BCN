import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { navigationPositionAction } from "../../redux/actions/actionsCreators";

const MapPage = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navigationPositionAction(2));
  }, [dispatch]);

  return (
    <>
      <iframe
        title="Map"
        width={410}
        height={550}
        frameBorder="0"
        style={{ border: 0, borderRadius: 13 }}
        src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyAK5boJsMKK7FDamPHx_p-dugiERdMRiG8&q=C/Diputació37,Barcelona&zoom=15`}
        allowFullScreen
      ></iframe>
    </>
  );
};

export default MapPage;
