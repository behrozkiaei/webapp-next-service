function TopFooter() {
    return ( 
    <div className="top-footer pattern-bg">
      <div className="container">
        <div className="mb-2">
          {/* <img
            src="/_ipx/s_180x40/layout/itoll-logo.svg"
            width={180}
            height={40}
            alt="های"
            loading="lazy"
          /> */}
        </div>
        <div className="row">
          <div className="col-lg-10 col-12">
            <span className="font-weight-bold">
              دفتر پشتیبانی:
            </span>
            <span className="ml-6">
              تهران، خیابان شیراز جنوبی، گرمسار غربی پلاک 23 طبقه چهارم
            </span>
            <br />
            <span className="ml-6">
              <span className="font-weight-bold">
                تلفن پشتیبانی:
              </span>
              <span>
                <a href="tel:02168207" dir="ltr" className="tel">
                  {" "}
                  021-89710001(){" "}
                </a>
              </span>
            </span>
            <span className="ml-6">
              <span className="font-weight-bold">
                ایمیل پشتیبانی:
              </span>
              <span>
                <a href="mailto:support@itoll.ir">
                  support@itoll.ir
                </a>
              </span>
            </span>
          </div>
          <div className="col-lg-2 col-12">
            <div className="float-left">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="icon__secondary instagram"
                  style={{ height: 24, width: 24, fill: "" }}
                  
                >
                  <path
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 1.5-.6 3-1.7 4.1-1.1 1.1-2.6 1.7-4.1 1.7H7.8C4.6 22 2 19.4 2 16.2V7.8c0-1.5.6-3 1.7-4.1S6.3 2 7.8 2zm-.2 2c-1 0-1.9.4-2.5 1.1C4.4 5.7 4 6.6 4 7.6v8.8c0 2 1.6 3.6 3.6 3.6h8.8c1 0 1.9-.4 2.5-1.1s1.1-1.6 1.1-2.5V7.6c0-2-1.6-3.6-3.6-3.6H7.6zm9.6 1.5c.3 0 .6.1.9.4.2.2.4.6.4.9s-.1.6-.4.9c-.2.2-.5.3-.9.3s-.6-.1-.9-.4c-.2-.2-.3-.5-.3-.8s.1-.6.4-.9c.2-.3.5-.4.8-.4zM12 7c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5s-.5 2.6-1.5 3.5c-.9 1-2.2 1.5-3.5 1.5s-2.6-.5-3.5-1.5C7.5 14.6 7 13.3 7 12s.5-2.6 1.5-3.5C9.4 7.5 10.7 7 12 7zm0 2c-.8 0-1.6.3-2.1.9-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.1c.6.6 1.3.9 2.1.9s1.6-.3 2.1-.9.9-1.3.9-2.1-.3-1.6-.9-2.1c-.5-.6-1.3-.9-2.1-.9z"
                    
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/"
                target="_blank"
                aria-label="linkedin"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="icon__secondary linkedin"
                  style={{ height: 24, width: 24, fill: "" }}
                  
                >
                  <path
                    d="M19 3c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v14c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6H5c-.5 0-1-.2-1.4-.6-.4-.4-.6-.9-.6-1.4V5c0-.5.2-1 .6-1.4C4 3.2 4.5 3 5 3h14zm-.5 15.5v-5.3c0-.9-.3-1.7-1-2.3-.6-.6-1.4-1-2.3-1-.8 0-1.8.5-2.3 1.3v-1.1h-2.8v8.4h2.8v-4.9c0-.8.6-1.4 1.4-1.4.4 0 .7.1 1 .4.3.3.4.6.4 1v4.9h2.8zM6.9 8.6c.4 0 .9-.2 1.2-.5.3-.3.5-.7.5-1.2 0-.9-.8-1.7-1.7-1.7-.5 0-.9.2-1.2.5-.3.3-.5.7-.5 1.2 0 .9.7 1.7 1.7 1.7zm1.4 9.9v-8.4H5.5v8.4h2.8z"
                    
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                aria-label="twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="icon__secondary twitter"
                  style={{ height: 24, width: 24, fill: "" }}
                  
                >
                  <path
                    d="M22.5 6c-.8.3-1.6.6-2.5.7.9-.5 1.6-1.4 1.9-2.4-.8.5-1.8.8-2.7 1.1C18.4 4.5 17.3 4 16 4c-2.4 0-4.3 1.9-4.3 4.3 0 .3 0 .7.1 1C8.3 9.1 5.1 7.4 3 4.8c-.4.6-.6 1.4-.6 2.1 0 1.5.8 2.8 1.9 3.6-.7 0-1.4-.2-2-.5 0 2.1 1.5 3.8 3.4 4.2-.4.1-.7.2-1.1.2-.3 0-.5 0-.8-.1.5 1.7 2.1 2.9 4 3-1.5 1.2-3.3 1.8-5.3 1.8-.3 0-.7 0-1-.1 1.9 1.3 4.2 2 6.6 2 7.9 0 12.2-6.5 12.2-12.2v-.6c.9-.6 1.6-1.3 2.2-2.2z"
                    
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default TopFooter;