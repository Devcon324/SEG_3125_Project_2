import Faq from "react-faq-component";
import FaqData from "../data/FaqData";
// import styles
import '../styles/FAQ.css';

const styles = {
  bgColor: '#535353',
  titleTextColor: "white",
  rowTitleColor: "#dddddd",
  rowContentColor: 'beige',
  arrowColor: "white",
  // margin
  rowContentTextSize: '16px',
  rowContentPaddingTop: '10px',
  rowContentPaddingBottom: '10px',
  rowContentPaddingLeft: '50px',
  rowContentPaddingRight: '150px',
};

const config = {
  animate: true,
};

const FAQ = () => {
    return (
      <div className="FAQ">
        <p style={{
          color: 'white',
          fontSize: '50px',
          textAlign: 'center',
          marginTop: '5px'
        }}>Frequently Asked Questions</p>
        <div className="faqContent">
        <Faq
          data={FaqData}
          styles={styles}
          config={config}
        />
        </div>
      </div>
    );
};

export default FAQ;