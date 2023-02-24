import * as S from "./styles";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { color } from "../UI/colors";

export default function BackBuy() {
  return (
    <S.ButtonBackToBuy>
      <StorefrontIcon sx={{ color: color.slate["50"] }} />
      Back to Buy
    </S.ButtonBackToBuy>
  );
}
