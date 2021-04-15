export default function TechnicalSupportPolicy() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-3 asideColumn">
          <h4>Policies</h4>
          <ul className="service-list">
            <li>
              <a href="/aup/">Acceptable Use Policy</a>
            </li>
            <li>
              <a href="/pp/">Privacy Policy</a>
            </li>
            <li className="active">
              <a href="/tsp/">Technical Support Policy</a>
            </li>
            <li>
              <a href="/wpp/">Website Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="divider-lg visible-xs"></div>
        <div className="col-md-8 col-lg-9">
          <h1 className="text-center decor color">
            KOS Technical Support Policy
          </h1>

          <br />
          <p className="text-left font18">
            We have a lot of questions which are hardware or software oriented
            on the side of our customers, but unrelated to the Internet service.
            We cannot freely field questions about user owned hardware or
            software.
          </p>

          <p className="text-left font18">
            <strong>
              Things which are freely covered by Kingston Online support:
            </strong>
          </p>

          <p className="text-left font18"></p>
          <ul>
            <li>Consultation on use specific questions</li>
            <li>
              Account specifics (password, userid, etc.) for individual’s
              software
            </li>
            <li>Internet-related problem solving (within reasonable limits)</li>
            <li>Questions about services at Kingston Online</li>
            <li>
              Basic network consultation as it applies to your business account
            </li>
            <li>General questions within reason</li>
          </ul>
          <p></p>

          <p className="text-left font18">
            <strong>
              Things which are not freely covered by Kingston Online support:
            </strong>
          </p>
          <p className="text-left font18"></p>
          <ul>
            <li>Network specific setup (internal networking issues)</li>
            <li>Hardware consultation unless asking for a price quote</li>
            <li>
              Software issues beyond those normally served (custom applications)
            </li>
            <li>Software for which there is no documentation</li>
            <li>Issues not directly linked with internet</li>
            <li>Domain name registration of networks outside our domain</li>
            <li>Vertical internet applications (VPNs, online services)</li>
          </ul>
          <p></p>
          <p className="text-left font18">
            Many questions which cannot be fielded free of charge for our
            customers may be purchased as support packages, or through our
            partnerships.
          </p>
          <p className="text-left font18">
            Please see this page as well:{" "}
            <a style="color: #005395; text-decoration: underline" href="/tac/">
              Terms &amp; Conditions of Service
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
