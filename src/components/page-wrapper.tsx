import "@/globals.css";
import TitleDesc from "./title-desc";
interface MyModalProps {
  children?: React.ReactNode;
  title?: string;
  desc1?: string;
  desc2?: string;
}
const PageWrapper: React.FC<MyModalProps> = ({
  children,
  title,
  desc1,
  desc2,
}) => {
  return (
    <main className="d-flex text-center justify-center align-center">
      <div className="container d-flex justify-center align-center">
        <div className="d-flex  flex-column justify-start align-center full-width section">
          <div
            className="d-flex justify-start flex-column align-start"
            style={{ width: "80%" }}
          >
            {/* <p className="mid_gray--text mb-8"></p> */}
          </div>
          <TitleDesc
            title={title ?? ""}
            desc1={desc1 ?? ""}
            desc2={desc2 ?? ""}
          />
          {children}
        </div>
      </div>
    </main>
  );
};
export default PageWrapper;
