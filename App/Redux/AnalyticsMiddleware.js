import Amplify, { Analytics } from "aws-amplify-react-native";
import { BloquinhoTypes } from "./BloquinhoRedux";
import { BloquinhoDetailTypes } from "./BloquinhoDetailRedux";

const analyticsTracking = ({ getState }) => next => action => {
    switch (action.type) {
        case BloquinhoTypes.BLOQUINHO_SUCCESS:
            Analytics.record('GetBloquinhos')
            break;
        case BloquinhoDetailTypes.BLOQUINHO_DETAIL_SUCCESS:
            const blocoId = getState().bloquinhoDetail.bloquinho.blocoId
            Analytics.record('GetBloquinhosDetails', { blocoId })
            break;
        default:
            return next(action)
    }

    return next(action)
}

export default analyticsTracking