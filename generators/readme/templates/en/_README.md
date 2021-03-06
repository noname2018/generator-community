# `<%= name %>`

__TODO:__ Put badges here. <%= license %>

> <%= description %>

## Table of contents
<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) -->
- [Overview](#overview)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Security](#security)
- [API](#api)
  * [`Currency`](#currency)
    + [**`getCurrencyByAlphabeticCode`**](#getcurrencybyalphabeticcode)
    + [Example](#example)
    + [Parameters](#parameters)
    + [Return type: [**`Currency`**](Currency.md)](#return-type-currencycurrencymd)
      - [`Currency` Properties](#currency-properties)
    + [Authorization](#authorization)
    + [HTTP request headers](#http-request-headers)
- [Background](#background)
- [Semantic version and `CHANGELOG`](#semantic-version-and-changelog)
- [Contributing to ``](#contributing-to-)
- [License](#license)
<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

<% if (includeOverview) { %>
## Overview

_Explain what `<%= name %>` does in greater detail and why someone might want to use it._

<% } %>

## Installation

__Prerequisite software__

`<%= name %>` is written in <%= lang %>, which must be installed prior to use. <%= lang %> requires <%= dependencyManager %>, which is used for installing dependencies.

```shell
# Install with <%= dependencyManager %>
>
```

<% if (includeConfig) { %>
## Configuration

 _If `<%= name %>` requires configuration before developers can use it, explain it in this section. For example:_

1. Contact support to create a partner OAuth2 application.
2. Configure OAuth and Redirect URI
3. Retrieve your Vendor Partner Application Client ID and Secret

<% } %>

## Usage

```
// Import, instantiate, and/invoke your product


// Write an example of one or product's most important features

```

<% if (includeSecurity) { %>
## Security

_Highlight important security issues/concerns in this section._

<% } %>

<% if (includeApi) { %>
## API

_The API section should detail `<%= name %>`'s objects and functions, their signatures, return types, callbacks, and events in detail. Types should be included where they aren't obvious. Caveats should be made clear. Here's an example a `Currency` object model generated by `swagger-codegen`:_

### `Currency`

> Class | Method | HTTP request | Description
> ------------ | ------------- | ------------- | -------------
> *Money.CurrencyApi* | [**getCurrencyByAlphabeticCode**](docs/CurrencyApi.md#getCurrencyByAlphabeticCode) | **GET** /currencies/{alphabetic-code} | Retrieve a Currency by alphabetic code.
>
> #### **`getCurrencyByAlphabeticCode`**
> > `Currency getCurrencyByAlphabeticCode(alphabeticCode)`
>
> Retrieve a specific Currency by its alphabetic code.
>
> #### Example
> ```js
> const Money = require('money')
>
> const moneyApi = new Money.CurrencyApi()
>
> // String | An alphabetic code that represents the currency.
> const alphabeticCode = 'USD'
>
> const callback = function(error, data, response) {
>   if (error) {
>     console.error(error)
>   } else {
>     console.log('API called successfully. Returned data: ' + data)
>   }
>   console.log(response)
> }
> moneyApi.getCurrencyByAlphabeticCode(alphabeticCode, callback)
> ```
>
> #### Parameters
>
> Name | Type | Description  | Notes
> ------------- | ------------- | ------------- | -------------
> **alphabeticCode** | **String**| An alphabetic code that represents the currency. |
>
> #### Return type: [**`Currency`**](Currency.md)
>
> ##### `Currency` Properties
> Name | Type | Description | Notes
> ------------ | ------------- | ------------- | -------------
> **validFrom** | **Number** | The date on which some thing become invalid or expired. If validFrom&#39;s value is of type String, that value must be a valid ISO 8601 format. If validFrom&#39; a value is of type Number, that value must be a valid Unix datetime stamp. If unknown, set validTo&#39;s date to null. | [optional]
> **validTo** | **Number** | The date on which some thing become valid or effective. If validTo&#39;s value is of type String, then that value must be a valid ISO 8601 format.  If validTo&#39;s value is of type Number, that value must be a valid Unix datetime stamp. If the date is either unknown or valid, set validTo&#39;s date to null. | [optional]
> **definition** | **String** | A description of the `Currency`, e.g., "The monetary unit of the United Kingdom". | [default to &#39;&#39;]
> **name** | **String** | The name of the `Currency`, e.g., "Pound Sterling". | [default to &#39;&#39;]
> **symbol** | **String** | Synonymous with `majorUnitSymbol`. | [default to &#39;null&#39;]
> **alphabeticCode** | **String** | An alphabetic code that represents the currency, e.g., "EUR" for the Euro. | [default to &#39;&#39;]
> **numericCode** | **String** | A numeric code optionally assigned to the Currency, e.g., the ISO 4217 standard assigns the numeric code "826" to the pound sterling (U.K.),  and "840" to the U.S. dollar. | [optional] [default to &#39;&#39;]
> **majorUnitSymbol** | **String** | The symbol used to denote the major unit of the currency, e.g., in the U.K., the major unit is the pound "£". | [default to &#39;&#39;]
> **minorUnitSymbol** | **String** | The symbol used to denote the minor unit of the currency, e.g.,  in the U.K., the minor unit is "pence," with the symbol "p". If the currency does not have a minor unit (e.g., the Turkish Lira), this attribute should have the value null. | [optional] [default to &#39;&#39;]
> **ratioOfMinorUnitToMajorUnit** | **Number** | The ratio of the value of the minor unit to the major unit. For example, there are 100 cents to 1 dollar in the US; therefore, the ratio of the minor unit to the major unit is 100/1 &#x3D; 100. If the currency does not have a minor unit, the attribute should have the value 1. | [optional]
>
> #### Authorization
>
> No authorization required
>
> #### HTTP request headers
>
> - **Content-Type**: application/json, application/xml
> - **Accept**: application/json, application/xml

<% } %>

<% if (includeBackground) { %>
## Background

_If `<%= name %>` depends on important but not widely known abstractions or other ecosystems, explain them here. This is also a good place to explain the product's motivation if similar products already exist._

<% } %>

## Semantic version and `CHANGELOG`

The latest version of `<%= name %>` is `0.0.0`. View the [`CHANGELOG`][changelog-url] for details.

## Contributing to `<%= name %>`
> [![Learn how to make a Pull Request with free training][prs-welcome-badge-image]][prs-welcome-url]
>
> We welcome contributors with [Pull Requests][prs-welcome-url]!

Contributions in the form of GitHub pull requests are welcome. Before embarking on a significant change, please adhere to the following guidelines:

  1. Read the [Code of Conduct][code-of-conduct-url].
  1. Create an issue to discuss the proposed change and ensure that it is likely to be merged:
      * [Report a defect][issues-new-defect-url] (aka "bug")
      * [Request a new feature][issues-new-feat-url]
  1. Follow [Contributing to `<%= name %>`][contributing-url]'s coding conventions and Git workflow if you're willing and able to program (or want to learn how).

## License
<% if (!license) { %>
__*You've elected NOT to include an open source license. If this is an InnerSource product repository that is hosted on private local area network ((e.g., within a company-Intranet), doing without a license may be acceptable.*__

__*However, please consider [the consequences of publishing software products without a license][license-no-license-url] before you release:*__

> Disallowing use of your code might not be what you intend by “no license.” An [open-source license][license-choose-url] allows reuse of your code while retaining copyright. If your goal is to completely opt-out of copyright restrictions, try a [public domain dedication][license-unlicense-url].
>
> No License. (n.d.). Retrieved September 13, 2017, from https://choosealicense.com/no-license/

<% } else { %>
[<%= license %>][license-url]<% } %> © [<%= author.name %>][author-url].




<!-- ⛔️ 📝 NOTE: PLEASE ALPHABETIZE LINK REFERENCES. 📝 ⛔️ -->

[author-url]: <%= author.url %>
[changelog-url]: ./CHANGELOG.md
[license-choose-url]: https://choosealicense.com/
[license-no-license-url]: https://choosealicense.com/no-license/
[license-unlicense-url]: https://choosealicense.com/licenses/#unlicense
[code-of-conduct-url]: ./CODE_OF_CONDUCT.md
[contributing-url]: ./CONTRIBUTING.md
[issues-new-defect-url]: <%= repository %>/issues/new?title=fix%28affected-scope%29%3A+subject-line-with-very-few-words&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Defect&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+__Feature%3A__+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+__EXAMPLE%3A__%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+__behavior+you+expect__+to+see%2C+or+the+behavior+that+__would__+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-new-feat-url]: <%= repository %>/issues/new?title=feat%28affected-scope%29%3A+subject-line-with-very-few-words&labels=Priority%3A+Medium%2CStatus%3A+Review+Needed%2CType%3A+Feature&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+__Feature%3A__+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+__EXAMPLE%3A__%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+__behavior+you+expect__+to+see%2C+or+the+behavior+that+__would__+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[license-url]: ./LICENSE
[nodejs-url]: https://nodejs.org
[npmjs-url]: https://www.npmjs.com/
[prs-welcome-badge-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs-welcome-url]: http://makeapullrequest.com
