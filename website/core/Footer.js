/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    const styles = {
      footerExisting: {
        textAlign: "center",
        width: "auto"
      },
      powerBy: {
        textAlign: "center",
        color: "rgba(255, 255, 255, 0.4)"
      },
      labelComunity: {
        color: "rgba(255, 255, 255, 0.6)"
      },
      sitemapRight: {
        paddingLeft: "0"
      },
      sitemapLeft: {
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: "5em"
      },
      routeLeft: {
        flex: "initial"
      },
      footerLeft: {
        paddingRight: "4em"
      }
    };

    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div style={styles.sitemapLeft} className="footer_left">
            <a href={this.props.config.baseUrl} style={styles.footerLeft}>
              {this.props.config.footerIcon && (
                <img
                  src={this.props.config.baseUrl + this.props.config.footerIcon}
                  alt={this.props.config.title}
                  className="footer_verdoc"
                />
              )}
            </a>
            <div style={styles.routeLeft}>
              <a href={this.props.config.baseUrl}>
                <h5>Home</h5>
              </a>

              <a href={this.props.config.subscribeLanding}>
                <h5>Subscribe</h5>
              </a>
              <a
                href={
                  this.props.config.baseUrl +
                  "docs/api_ref/login_token_api/issue-access-token"
                }
              >
                <h5>Document</h5>
              </a>
            </div>
          </div>

          <div style={styles.sitemapRight} className="footer_right">
            <a>
              <h5>Communitry</h5>
            </a>
            <a href={`${this.props.config.baseUrl}blog`}>
              <h5 style={styles.labelComunity} className="social_footer">
                Facebook
              </h5>
            </a>

            <a href={this.props.config.githubUrl}>
              <h5 style={styles.labelComunity} className="social_footer">
                GitHub
              </h5>
            </a>

            <a
              className="github-button"
              href={this.props.config.githubUrl}
              data-icon="octicon-star"
              data-count-href="/verdoc-io/verdoc-documents/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
          </div>
        </section>
        <div style={styles.powerBy}>
          <p>
            <b>Powered by</b>
          </p>
        </div>
        <a
          href={this.props.config.existingLanding}
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource"
          style={styles.footerExisting}
        >
          <img
            src={`${this.props.config.baseUrl}${
              this.props.config.footerTheExisting
            }`}
            alt="The Existing company"
          />
        </a>
        <section className="copyright">
          <b>{this.props.config.copyright}</b>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
