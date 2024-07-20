import Faq from "react-faq-component";
import FaqDataEN from "../data/FaqDataEN";
import FaqDataFR from "../data/FaqDataFR";

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

const FAQContent = ({language}) => {
  if (language === "French") {
    return (
      <div>
        <p style={{
            color: 'white',
            fontSize: '50px',
            textAlign: 'center',
            marginTop: '5px'
          }}>Questions fréquemment posées</p>
          <div className="faqContent">
          <Faq
            data={FaqDataFR}
            styles={styles}
            config={config}
          />
          </div>
      </div>
    );
  }
  else if (language === "English") {
    return (
      <div>
        <p style={{
            color: 'white',
            fontSize: '50px',
            textAlign: 'center',
            marginTop: '5px'
          }}>Frequently Asked Questions</p>
          <div className="faqContent">
          <Faq
            data={FaqDataEN}
            styles={styles}
            config={config}
          />
          </div>
      </div>
    );
  }
  // default is English
  else {
    return (
      <div>
        <p style={{
            color: 'white',
            fontSize: '50px',
            textAlign: 'center',
            marginTop: '5px'
          }}>Frequently Asked Questions</p>
          <div className="faqContent">
          <Faq
            data={FaqDataEN}
            styles={styles}
            config={config}
          />
          </div>
      </div>
    );
  }
}

export default FAQContent;