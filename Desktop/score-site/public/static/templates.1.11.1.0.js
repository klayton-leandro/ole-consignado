(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        if (typeof root === 'undefined' || root !== Object(root)) {
            throw new Error('templatizer: window does not exist or is not an object');
        }
        root.templatizer = factory();
    }
}(this, function () {
    var jade=function(){function n(n){return null!=n&&""!==n}function t(e){return(Array.isArray(e)?e.map(t):e&&"object"==typeof e?Object.keys(e).filter(function(n){return e[n]}):[e]).filter(n).join(" ")}function e(n){return i[n]||n}function r(n){var t=String(n).replace(o,e);return t===""+n?n:t}var a={};a.merge=function t(e,r){if(1===arguments.length){for(var a=e[0],i=1;i<e.length;i++)a=t(a,e[i]);return a}var o=e.class,s=r.class;(o||s)&&(o=o||[],s=s||[],Array.isArray(o)||(o=[o]),Array.isArray(s)||(s=[s]),e.class=o.concat(s).filter(n));for(var f in r)"class"!=f&&(e[f]=r[f]);return e},a.joinClasses=t,a.cls=function(n,e){for(var r=[],i=0;i<n.length;i++)e&&e[i]?r.push(a.escape(t([n[i]]))):r.push(t(n[i]));var o=t(r);return o.length?' class="'+o+'"':""},a.style=function(n){return n&&"object"==typeof n?Object.keys(n).map(function(t){return t+":"+n[t]}).join(";"):n},a.attr=function(n,t,e,r){return"style"===n&&(t=a.style(t)),"boolean"==typeof t||null==t?t?" "+(r?n:n+'="'+n+'"'):"":0==n.indexOf("data")&&"string"!=typeof t?(JSON.stringify(t).indexOf("&")!==-1&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),t&&"function"==typeof t.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+n+"='"+JSON.stringify(t).replace(/'/g,"&apos;")+"'"):e?(t&&"function"==typeof t.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+n+'="'+a.escape(t)+'"'):(t&&"function"==typeof t.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+n+'="'+t+'"')},a.attrs=function(n,e){var r=[],i=Object.keys(n);if(i.length)for(var o=0;o<i.length;++o){var s=i[o],f=n[s];"class"==s?(f=t(f))&&r.push(" "+s+'="'+f+'"'):r.push(a.attr(s,f,!1,e))}return r.join("")};var i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},o=/[&<>"]/g;return a.escape=r,a.rethrow=function n(t,e,r,a){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&e||a))throw t.message+=" on line "+r,t;try{a=a||require("fs").readFileSync(e,"utf8")}catch(e){n(t,null,r)}var i=3,o=a.split("\n"),s=Math.max(r-i,0),f=Math.min(o.length,r+i),i=o.slice(s,f).map(function(n,t){var e=t+s+1;return(e==r?"  > ":"    ")+e+"| "+n}).join("\n");throw t.path=e,t.message=(e||"Jade")+":"+r+"\n"+i+"\n\n"+t.message,t},a.DebugItem=function(n,t){this.lineno=n,this.filename=t},a}(); 

    var templatizer = {};
    templatizer["admin"] = {};
    templatizer["campaign"] = {};
    templatizer["crm"] = {};
    templatizer["home"] = {};
    templatizer["login"] = {};
    templatizer["me"] = {};
    templatizer["partner"] = {};
    templatizer["terms"] = {};
    templatizer["admin"]["applications"] = {};
    templatizer["admin"]["auth"] = {};
    templatizer["admin"]["export"] = {};
    templatizer["admin"]["suppliers"] = {};
    templatizer["crm"]["applications"] = {};
    templatizer["crm"]["customer"] = {};
    templatizer["me"]["applications"] = {};
    templatizer["me"]["offers"] = {};

    // admin/applications/index.jade compiled template
    templatizer["admin"]["applications"]["index"] = function tmpl_admin_applications_index(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(applications, moment, page, status, undefined, window) {
            buf.push('<div class="admin-site-layout"><div class="admin-nav-column">');
            buf.push(templatizer["admin"]["applications"]["index"]["admin-nav"](locals));
            buf.push('</div><div class="admin-content-column"><div class="header-panel"><div class="header-panel-left"><h2>Pedidos</h2></div><div class="header-panel-right"><ul class="state-selector button-group"><li><a href="./applications?status=leads"' + jade.cls([ "btn", "small", status === "leads" ? "selected" : "" ], [ null, null, true ]) + '>Cadastrada</a></li><li><a href="./applications?status=leads-sg"' + jade.cls([ "btn", "small", status === "leads-sg" ? "selected" : "" ], [ null, null, true ]) + '>Cadastrada SG</a></li><li><a href="./applications?status=started"' + jade.cls([ "btn", "small", status === "started" ? "selected" : "" ], [ null, null, true ]) + '>Em análise                li</a><a href="./applications?status=started-sg"' + jade.cls([ "btn", "small", status === "started-sg" ? "selected" : "" ], [ null, null, true ]) + '>Em análise SG</a></li><li><a href="./applications?status=has-bids"' + jade.cls([ "btn", "small", status === "has-bids" ? "selected" : "" ], [ null, null, true ]) + '>Proposta Enviada</a></li><li><a href="./applications?status=accept"' + jade.cls([ "btn", "small", status === "accept" ? "selected" : "" ], [ null, null, true ]) + '>Proposta Aceita</a></li><li><a href="./applications?status=follow-up"' + jade.cls([ "btn", "small", status === "follow-up" ? "selected" : "" ], [ null, null, true ]) + '>Follow up ( Com Cliente)</a></li><li><a href="./applications?status=closed"' + jade.cls([ "btn", "small", status === "closed" ? "selected" : "" ], [ null, null, true ]) + '>Proposta Fechada</a></li><li><a href="./applications?status=archive"' + jade.cls([ "btn", "small", status === "archive" ? "selected" : "" ], [ null, null, true ]) + '>Arquivo</a></li></ul></div></div><table class="table striped"><thead><tr><th>Criado</th><th>Atualizada</th><th>CPF</th><th>Nome</th><th>Email</th><th>Número de Telefone</th><th>Produto</th><th></th></tr></thead><tbody>');
            (function() {
                var $obj = applications;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var application = $obj[$index];
                        buf.push("<tr><td>" + jade.escape((jade_interp = moment(application.created).fromNow()) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = moment(application.updated).fromNow()) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application.personalNumber) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application.firstName) == null ? "" : jade_interp) + " " + jade.escape((jade_interp = application.lastName) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application.email) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application.telephoneNumber) == null ? "" : jade_interp) + "</td><td> ");
                        if (application.securityType === "car") {
                            if (application.securityIsOwned === true) {
                                buf.push("Empréstimo c/ Garantia");
                            } else {
                                buf.push("Financiamento de Automóvel");
                            }
                        } else {
                            buf.push("Empréstimo sem Garantia");
                        }
                        buf.push("</td><td> <a" + jade.attr("href", "./applications/" + application.id + "", true, false) + ' class="btn small primary">View</a></td></tr>');
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var application = $obj[$index];
                        buf.push("<tr><td>" + jade.escape((jade_interp = moment(application.created).fromNow()) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = moment(application.updated).fromNow()) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application.personalNumber) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application.firstName) == null ? "" : jade_interp) + " " + jade.escape((jade_interp = application.lastName) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application.email) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application.telephoneNumber) == null ? "" : jade_interp) + "</td><td> ");
                        if (application.securityType === "car") {
                            if (application.securityIsOwned === true) {
                                buf.push("Empréstimo c/ Garantia");
                            } else {
                                buf.push("Financiamento de Automóvel");
                            }
                        } else {
                            buf.push("Empréstimo sem Garantia");
                        }
                        buf.push("</td><td> <a" + jade.attr("href", "./applications/" + application.id + "", true, false) + ' class="btn small primary">View</a></td></tr>');
                    }
                }
            }).call(this);
            buf.push('</tbody></table><div class="center">');
            if (page > 1) {
                buf.push("<a" + jade.attr("href", "./applications?page=" + (page - 1) + "&status=" + status + "", true, false) + ' class="btn">&laquo; Previous page</a>');
            }
            if (applications.length === 50) {
                buf.push("<a" + jade.attr("href", "./applications?page=" + (page + 1) + "&status=" + status + "", true, false) + ' class="btn">Next page &raquo;</a>');
            }
            buf.push("</div></div></div>");
        }).call(this, "applications" in locals_for_with ? locals_for_with.applications : typeof applications !== "undefined" ? applications : undefined, "moment" in locals_for_with ? locals_for_with.moment : typeof moment !== "undefined" ? moment : undefined, "page" in locals_for_with ? locals_for_with.page : typeof page !== "undefined" ? page : undefined, "status" in locals_for_with ? locals_for_with.status : typeof status !== "undefined" ? status : undefined, "undefined" in locals_for_with ? locals_for_with.undefined : typeof undefined !== "undefined" ? undefined : undefined, "window" in locals_for_with ? locals_for_with.window : typeof window !== "undefined" ? window : undefined);
        return buf.join("");
    };

    // admin/applications/index.jade:admin-nav compiled template
    templatizer["admin"]["applications"]["index"]["admin-nav"] = function tmpl_admin_applications_index_admin_nav(locals) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="side-nav admin-nav">');
        var targetUrl;
        if (window.location.hostname.indexOf("beta") >= 0) {
            targetUrl = "http://cof-beta.finanzero.com.br";
        } else {
            targetUrl = "http://cof.finanzero.com.br";
        }
        buf.push('<div class="side-nav-header"><a href="/admin">Admin</a></div><div class="side-nav-list"><ul><li><a href="/admin">Homepage</a></li><li><a href="/admin/applications">Applications</a></li><li><a href="/admin/export">Export</a></li><li><a href="/admin/suppliers">Suppliers</a></li><li><a href="/admin/auth">Users</a></li><li><a' + jade.attr("href", targetUrl, true, false) + ' target="_blank">COF</a></li><li><a href="/logout">Sign out</a><div class="current-user">' + jade.escape((jade_interp = locals.user.name) == null ? "" : jade_interp) + "</div></li></ul></div></nav>");
        return buf.join("");
    };

    // admin/applications/view.jade compiled template
    templatizer["admin"]["applications"]["view"] = function tmpl_admin_applications_view(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(Date, application, numeral, undefined, window) {
            buf.push('<div class="admin-site-layout"><div class="admin-nav-column">');
            buf.push(templatizer["admin"]["applications"]["view"]["admin-nav"](locals));
            buf.push('</div><div class="admin-content-column"><div class="admin-splitview applications-view">         <div class="input-column"><div class="header-panel"><div class="header-panel-left"><h3>' + jade.escape((jade_interp = application.firstName) == null ? "" : jade_interp) + " " + jade.escape((jade_interp = application.lastName) == null ? "" : jade_interp) + '</h3></div><div class="header-panel-right"><button' + jade.attr("data-application-id", application.id, true, false) + ' class="right btn success application-csv-download"><i class="fa fa-download"></i><span>Download as CSV </span></button></div></div>');
            var personalDetails = [ "firstName", "middleName", "lastName", "personalNumber", "birthDate", "placeOfBirth", "nationality", "RG", "RGExpeditorOrganisation", "RGOriginState", "civilStatus", "workStatus", "householdSize", "housing", "hasCoApplicant", "coApplicantFirstName", "coApplicantLastName", "coApplicantPersonalNumber", "coApplicantRG", "coApplicantBirthDate", "fathersName", "mothersName", "hasDriversLicence", "driversLicenceNumber" ];
            var contactDetails = [ "telephoneNumber", "homePhoneNumber", "workPhoneNumber", "email", "zipCode", "address1", "address2", "city", "state", "neighbourhood" ];
            var incomeDetails = [ "monthlyIncome", "occupation", "employmentDate", "householdMonthlyIncome", "companyName", "companyPhone", "companyAddress", "companyAddressComplement", "companyZipCode", "companyNeighbourhood", "companyRegistrationNumber" ];
            var applicationDetails = [ "loanReason", "appliedAmount", "loanPeriodInYears", "loanPeriodInMonths", "securityType", "securityIsOwned", "urgency", "insurance", "insuranceValue", "installmentValue" ];
            var systemDetails = [ "applicationState", "created", "updated", "revision", "closed", "closedReason", "closedDate" ];
            var bankDetails = [ "hasCreditRestrictions", "serasaScore", "bankName", "agency", "accountMonthsActive", "accountNumber", "accountType", "hasExperienceWithCredit", "institutionWithCreditExperience" ];
            var references = [ "reference1Name", "reference1GradeOfIntimacy", "reference1PhoneNumber", "reference2Name", "reference2GradeOfIntimacy", "reference2PhoneNumber" ];
            if (application.auction && application.auction.startedByName && application.auction.startedByName !== "") {
                buf.push('<div class="section"><div class="alert info">');
                if (application.auction.startedBySelf === true) {
                    buf.push("<h3>This application was submitted by the user via the website</h3>");
                } else {
                    buf.push("<h3>This application was submitted by " + jade.escape((jade_interp = application.auction.startedByName) == null ? "" : jade_interp) + "</h3>");
                }
                buf.push("</div></div>");
            }
            buf.push('<div class="section"><h4>Personal details</h4><table class="table striped alternate-rows">');
            (function() {
                var $obj = personalDetails;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var key = $obj[$index];
                        buf.push("<tr> <td>" + jade.escape((jade_interp = key) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application[key]) == null ? "" : jade_interp) + "</td></tr>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var key = $obj[$index];
                        buf.push("<tr> <td>" + jade.escape((jade_interp = key) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application[key]) == null ? "" : jade_interp) + "</td></tr>");
                    }
                }
            }).call(this);
            buf.push('</table></div><div class="section"><h4>Contact details</h4><table class="table striped alternate-rows">');
            (function() {
                var $obj = contactDetails;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var key = $obj[$index];
                        buf.push("<tr> <td>" + jade.escape((jade_interp = key) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application[key]) == null ? "" : jade_interp) + "</td></tr>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var key = $obj[$index];
                        buf.push("<tr> <td>" + jade.escape((jade_interp = key) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application[key]) == null ? "" : jade_interp) + "</td></tr>");
                    }
                }
            }).call(this);
            buf.push('</table></div><div class="section"><h4>Income details</h4><table class="table striped alternate-rows">');
            (function() {
                var $obj = incomeDetails;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var key = $obj[$index];
                        buf.push("<tr><td>" + jade.escape((jade_interp = key) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application[key]) == null ? "" : jade_interp) + "</td></tr>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var key = $obj[$index];
                        buf.push("<tr><td>" + jade.escape((jade_interp = key) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application[key]) == null ? "" : jade_interp) + "</td></tr>");
                    }
                }
            }).call(this);
            buf.push('</table></div><div class="section"><h4>Bank</h4><table class="table striped alternate-rows">');
            (function() {
                var $obj = bankDetails;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var key = $obj[$index];
                        buf.push("<tr><td>" + jade.escape((jade_interp = key) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application[key]) == null ? "" : jade_interp) + "</td></tr>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var key = $obj[$index];
                        buf.push("<tr><td>" + jade.escape((jade_interp = key) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application[key]) == null ? "" : jade_interp) + "</td></tr>");
                    }
                }
            }).call(this);
            buf.push('</table></div><div class="section"><h4>Application details</h4><table class="table striped alternate-rows">');
            (function() {
                var $obj = applicationDetails;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var key = $obj[$index];
                        buf.push("<tr><td>" + jade.escape((jade_interp = key) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application[key]) == null ? "" : jade_interp) + "</td></tr>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var key = $obj[$index];
                        buf.push("<tr><td>" + jade.escape((jade_interp = key) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application[key]) == null ? "" : jade_interp) + "</td></tr>");
                    }
                }
            }).call(this);
            buf.push('</table></div><div class="section"><h4>References</h4><table class="table striped alternate-rows">');
            (function() {
                var $obj = references;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var key = $obj[$index];
                        buf.push("<tr><td>" + jade.escape((jade_interp = key) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application[key]) == null ? "" : jade_interp) + "</td></tr>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var key = $obj[$index];
                        buf.push("<tr><td>" + jade.escape((jade_interp = key) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application[key]) == null ? "" : jade_interp) + "</td></tr>");
                    }
                }
            }).call(this);
            buf.push('</table></div><div class="section"><h4>Vehicle security</h4><table class="table striped alternate-rows">');
            (function() {
                var $obj = application.vehicleSecurity;
                if ("number" == typeof $obj.length) {
                    for (var key = 0, $l = $obj.length; key < $l; key++) {
                        var val = $obj[key];
                        buf.push("<tr><td>" + jade.escape((jade_interp = key) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = val) == null ? "" : jade_interp) + "</td></tr>");
                    }
                } else {
                    var $l = 0;
                    for (var key in $obj) {
                        $l++;
                        var val = $obj[key];
                        buf.push("<tr><td>" + jade.escape((jade_interp = key) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = val) == null ? "" : jade_interp) + "</td></tr>");
                    }
                }
            }).call(this);
            buf.push('</table></div><div class="section"><h4>Tracking data</h4><table class="table striped alternate-rows">');
            (function() {
                var $obj = application.trackingData;
                if ("number" == typeof $obj.length) {
                    for (var key = 0, $l = $obj.length; key < $l; key++) {
                        var val = $obj[key];
                        buf.push("<tr><td>" + jade.escape((jade_interp = key) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = val) == null ? "" : jade_interp) + "</td></tr>");
                    }
                } else {
                    var $l = 0;
                    for (var key in $obj) {
                        $l++;
                        var val = $obj[key];
                        buf.push("<tr><td>" + jade.escape((jade_interp = key) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = val) == null ? "" : jade_interp) + "</td></tr>");
                    }
                }
            }).call(this);
            buf.push('</table></div><div class="section"><h4>System details</h4><table class="table striped alternate-rows">');
            (function() {
                var $obj = systemDetails;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var key = $obj[$index];
                        buf.push("<tr><td>" + jade.escape((jade_interp = key) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application[key]) == null ? "" : jade_interp) + "</td></tr>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var key = $obj[$index];
                        buf.push("<tr><td>" + jade.escape((jade_interp = key) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = application[key]) == null ? "" : jade_interp) + "</td></tr>");
                    }
                }
            }).call(this);
            buf.push('</table></div><div class="section"><h3>documentos</h3><table class="table striped alternate-rows"><tbody>');
            (function() {
                var $obj = application.files;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var file = $obj[$index];
                        buf.push("<tr><td>" + jade.escape((jade_interp = file.category) == null ? "" : jade_interp) + '</td><td class="right"><a' + jade.attr("href", file.url, true, false) + ' target="_blank">Baixar</a></td></tr>');
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var file = $obj[$index];
                        buf.push("<tr><td>" + jade.escape((jade_interp = file.category) == null ? "" : jade_interp) + '</td><td class="right"><a' + jade.attr("href", file.url, true, false) + ' target="_blank">Baixar</a></td></tr>');
                    }
                }
            }).call(this);
            buf.push("</tbody></table></div>");
            if (application.auction) {
                buf.push('<div class="section"><h4>Auction details</h4><table class="table striped alternate-rows"><tbody>');
                (function() {
                    var $obj = application.auction;
                    if ("number" == typeof $obj.length) {
                        for (var key = 0, $l = $obj.length; key < $l; key++) {
                            var val = $obj[key];
                            buf.push("<tr><td>" + jade.escape((jade_interp = key) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = val) == null ? "" : jade_interp) + "</td></tr>");
                        }
                    } else {
                        var $l = 0;
                        for (var key in $obj) {
                            $l++;
                            var val = $obj[key];
                            buf.push("<tr><td>" + jade.escape((jade_interp = key) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = val) == null ? "" : jade_interp) + "</td></tr>");
                        }
                    }
                }).call(this);
                buf.push("</tbody></table></div>");
            }
            buf.push('<div class="section"> ');
            buf.push(templatizer["admin"]["applications"]["view"]["application-bids"](application));
            buf.push('</div></div><div class="action-column">');
            buf.push(templatizer["admin"]["applications"]["view"]["application-change-state"](application));
            buf.push(templatizer["admin"]["applications"]["view"]["application-comments"](application));
            buf.push("</div></div></div></div>");
        }).call(this, "Date" in locals_for_with ? locals_for_with.Date : typeof Date !== "undefined" ? Date : undefined, "application" in locals_for_with ? locals_for_with.application : typeof application !== "undefined" ? application : undefined, "numeral" in locals_for_with ? locals_for_with.numeral : typeof numeral !== "undefined" ? numeral : undefined, "undefined" in locals_for_with ? locals_for_with.undefined : typeof undefined !== "undefined" ? undefined : undefined, "window" in locals_for_with ? locals_for_with.window : typeof window !== "undefined" ? window : undefined);
        return buf.join("");
    };

    // admin/applications/view.jade:application-bids compiled template
    templatizer["admin"]["applications"]["view"]["application-bids"] = function tmpl_admin_applications_view_application_bids(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        if (application.auction !== null && application.auction.bids.length > 0) {
            buf.push("<div" + jade.attr("data-application-id", application.id, true, false) + ' class="application-bids"><h3>Ofertas</h3><table class="table striped"><thead><tr><th>Fornecedor</th><th>Valor pré-aprovado</th><th>Parcelas</th><th>Taxa C.E.T</th><th>Prestação</th><th> </th><th></th></tr></thead><tbody>');
            (function() {
                var $obj = application.auction.bids;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var bid = $obj[$index];
                        buf.push("<tr" + jade.cls([ bid.rejected ? "rejected" : bid.accepted ? "accepted" : "" ], [ true ]) + ">      <td>" + jade.escape((jade_interp = bid.supplier.name) == null ? "" : jade_interp) + "                    </td>");
                        if (bid.rejected) {
                            buf.push('<td colspan="4">rejeitado</td><td> <button' + jade.attr("data-bid-id", bid.id, true, false) + ' class="btn warning request-new">pedir uma nova</button></td>');
                        } else {
                            buf.push("<td>" + jade.escape((jade_interp = bid.approvedAmount) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = bid.approvedPeriodMonths) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = bid.totalAnnualInterestRate) == null ? "" : jade_interp) + "%</td><td> " + jade.escape((jade_interp = numeral(bid.monthlyInstallment).format("$ 0,0.00")) == null ? "" : jade_interp) + "</td>");
                            if (bid.accepted) {
                                buf.push("<td>Oferta aceita</td>");
                            } else {
                                buf.push("<td> <button" + jade.attr("data-bid-id", bid.id, true, false) + ' class="small btn warning request-new">Pedir uma nova</button></td><td><button' + jade.attr("data-bid-id", bid.id, true, false) + ' class="small btn primary accept-bid">Aceitar esta oferta</button></td>');
                            }
                        }
                        buf.push("</tr>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var bid = $obj[$index];
                        buf.push("<tr" + jade.cls([ bid.rejected ? "rejected" : bid.accepted ? "accepted" : "" ], [ true ]) + ">      <td>" + jade.escape((jade_interp = bid.supplier.name) == null ? "" : jade_interp) + "                    </td>");
                        if (bid.rejected) {
                            buf.push('<td colspan="4">rejeitado</td><td> <button' + jade.attr("data-bid-id", bid.id, true, false) + ' class="btn warning request-new">pedir uma nova</button></td>');
                        } else {
                            buf.push("<td>" + jade.escape((jade_interp = bid.approvedAmount) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = bid.approvedPeriodMonths) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = bid.totalAnnualInterestRate) == null ? "" : jade_interp) + "%</td><td> " + jade.escape((jade_interp = numeral(bid.monthlyInstallment).format("$ 0,0.00")) == null ? "" : jade_interp) + "</td>");
                            if (bid.accepted) {
                                buf.push("<td>Oferta aceita</td>");
                            } else {
                                buf.push("<td> <button" + jade.attr("data-bid-id", bid.id, true, false) + ' class="small btn warning request-new">Pedir uma nova</button></td><td><button' + jade.attr("data-bid-id", bid.id, true, false) + ' class="small btn primary accept-bid">Aceitar esta oferta</button></td>');
                            }
                        }
                        buf.push("</tr>");
                    }
                }
            }).call(this);
            buf.push("</tbody></table></div>");
        }
        return buf.join("");
    };


    // admin/applications/view.jade:application-comments compiled template
    templatizer["admin"]["applications"]["view"]["application-comments"] = function tmpl_admin_applications_view_application_comments(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="application-comments"><form class="comment-form"><input type="hidden" name="applicationId"' + jade.attr("value", application.id, true, false) + '/><h4>Adicione um comentário      </h4><div class="row"><div class="col-12"><textarea name="comment"></textarea></div></div><div class="row"><div class="col-6"><div class="checkbox-container"><input type="checkbox" name="notify"/><label>Notificar o cliente via e-mail</label></div></div><div class="col-6"><button type="submit" class="btn primary">Adicione um comentário    </button></div></div></form><div class="comment-list">  ');
        (function() {
            var $obj = application.comments;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var comment = $obj[$index];
                    buf.push('<div class="comment"><div class="small"><i><span>' + jade.escape((jade_interp = new Date(comment.created).toISOString().slice(0, 10)) == null ? "" : jade_interp) + "</span><span>&nbsp; " + jade.escape((jade_interp = new Date(comment.created).toISOString().slice(11, 16)) == null ? "" : jade_interp) + "</span></i><b>&nbsp;" + jade.escape((jade_interp = comment.userName) == null ? "" : jade_interp) + "</b></div><p>" + jade.escape((jade_interp = comment.comment) == null ? "" : jade_interp) + "</p>");
                    if (comment.notify) {
                        buf.push('<div class="checkbox-container"><input type="checkbox" checked="checked" disabled="disabled"/><labelcliente>notificado por email</labelcliente></div>');
                    }
                    buf.push("</div>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var comment = $obj[$index];
                    buf.push('<div class="comment"><div class="small"><i><span>' + jade.escape((jade_interp = new Date(comment.created).toISOString().slice(0, 10)) == null ? "" : jade_interp) + "</span><span>&nbsp; " + jade.escape((jade_interp = new Date(comment.created).toISOString().slice(11, 16)) == null ? "" : jade_interp) + "</span></i><b>&nbsp;" + jade.escape((jade_interp = comment.userName) == null ? "" : jade_interp) + "</b></div><p>" + jade.escape((jade_interp = comment.comment) == null ? "" : jade_interp) + "</p>");
                    if (comment.notify) {
                        buf.push('<div class="checkbox-container"><input type="checkbox" checked="checked" disabled="disabled"/><labelcliente>notificado por email</labelcliente></div>');
                    }
                    buf.push("</div>");
                }
            }
        }).call(this);
        buf.push("</div></div>");
        return buf.join("");
    };


    // admin/applications/view.jade:application-change-state compiled template
    templatizer["admin"]["applications"]["view"]["application-change-state"] = function tmpl_admin_applications_view_application_change_state(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="application-change-state"><input type="hidden" name="id"' + jade.attr("value", application.id, true, false) + '/><input type="hidden" name="revision"' + jade.attr("value", application.revision, true, false) + "/><h3>Move application</h3><button data-state='2'" + jade.cls([ "btn", "small", application.applicationState === 2 ? "primary" : "" ], [ null, null, true ]) + ">Cadastrada</button><button data-state='4'" + jade.cls([ "btn", "small", application.applicationState === 4 ? "primary" : "" ], [ null, null, true ]) + ">Em análise</button><button data-state='8'" + jade.cls([ "btn", "small", application.applicationState === 8 ? "primary" : "" ], [ null, null, true ]) + ">Proposta Enviada</button><button data-state='32'" + jade.cls([ "btn", "small", application.applicationState === 32 ? "primary" : "" ], [ null, null, true ]) + ">Aceita</button><button data-state='64'" + jade.cls([ "btn", "small", application.applicationState === 64 ? "primary" : "" ], [ null, null, true ]) + ">Em follow-up</button><button data-state='16'" + jade.cls([ "btn", "small", application.applicationState === 16 ? "primary" : "" ], [ null, null, true ]) + ">Encerrada</button><button data-state='128'" + jade.cls([ "btn", "small", application.applicationState === 128 ? "primary" : "" ], [ null, null, true ]) + ">Paga</button></div>");
        return buf.join("");
    };


    // admin/applications/view.jade:admin-nav compiled template
    templatizer["admin"]["applications"]["view"]["admin-nav"] = function tmpl_admin_applications_view_admin_nav(locals) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="side-nav admin-nav">');
        var targetUrl;
        if (window.location.hostname.indexOf("beta") >= 0) {
            targetUrl = "http://cof-beta.finanzero.com.br";
        } else {
            targetUrl = "http://cof.finanzero.com.br";
        }
        buf.push('<div class="side-nav-header"><a href="/admin">Admin</a></div><div class="side-nav-list"><ul><li><a href="/admin">Homepage</a></li><li><a href="/admin/applications">Applications</a></li><li><a href="/admin/export">Export</a></li><li><a href="/admin/suppliers">Suppliers</a></li><li><a href="/admin/auth">Users</a></li><li><a' + jade.attr("href", targetUrl, true, false) + ' target="_blank">COF</a></li><li><a href="/logout">Sign out</a><div class="current-user">' + jade.escape((jade_interp = locals.user.name) == null ? "" : jade_interp) + "</div></li></ul></div></nav>");
        return buf.join("");
    };

    // admin/auth/create.jade compiled template
    templatizer["admin"]["auth"]["create"] = function tmpl_admin_auth_create(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(window) {
            buf.push('<div class="admin-site-layout"><div class="admin-nav-column">');
            buf.push(templatizer["admin"]["auth"]["create"]["admin-nav"](locals));
            buf.push('</div><div class="admin-content-column"><div class="admin-splitview"><div class="input-column"><div class="header-panel"><div class="header-panel-left"><h2>Create new user</h2></div></div>');
            buf.push(templatizer["admin"]["auth"]["create"]["auth-form"]("../auth"));
            buf.push('</div><div class="action-column"></div></div></div></div>');
        }).call(this, "window" in locals_for_with ? locals_for_with.window : typeof window !== "undefined" ? window : undefined);
        return buf.join("");
    };

    // admin/auth/create.jade:auth-form compiled template
    templatizer["admin"]["auth"]["create"]["auth-form"] = function tmpl_admin_auth_create_auth_form(returnUrl, id) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<form class="form auth-form"><div class="sections">');
        if (id) {
            buf.push('<input type="hidden" name="id"' + jade.attr("value", id, true, false) + "/>");
        }
        buf.push('<div class="section"><h3>Basic details</h3><div class="input-container"><div class="label-container"><label>Name</label></div><div class="controls"><input type="text" name="name" data-validate="data-validate" data-validate-required="You must enter a name" class="small"/></div></div><div class="input-container"><div class="label-container"><label>E-mail</label></div><div class="controls"><input type="email" name="email" data-validate="data-validate" data-validate-required="You must enter an email" class="small"/></div></div><div class="input-container"><div class="label-container"><label>Telephone number</label></div><div class="controls"><input autocomplete="off" type="tel" name="telephoneNumber" data-validate="data-validate" data-validate-required="You must enter a telephone number" class="small"/></div></div></div><div class="section"><div class="input-container"><div class="label-container"><label>Role</label></div><div class="controls"><select name="role" class="small"><option value="admin">Administrator</option><option value="supplier">Supplier</option><option value="customer">Customer</option><option value="affiliate">Affiliate</option><option value="sales">Sales</option><option value="advisor">Advisor</option></select></div></div><div class="input-container"><div class="label-container"><label>Group</label></div><div class="control"><select name="group" class="small"><option value="">Select a group</option></select><input type="text" name="group" placeholder="Enter new group name" class="small"/><br/><br/><a href="javascript:void()" class="group-toggle">Create new group</a></div></div></div><div class="section"><div class="input-container"><div class="label-container"><label>API-Key</label></div><div class="controls"><input type="text" name="apiKey" class="small"/></div></div><div class="input-container"><div class="label-container"><label>API-Secret</label></div><div class="controls"><input type="text" name="apiSecret" class="small"/></div></div></div></div><div class="section actions"><button type="submit" class="btn btn-large primary">Save</button><span>or </span><a' + jade.attr("href", returnUrl, true, false) + ">cancel</a></div></form>");
        return buf.join("");
    };


    // admin/auth/create.jade:admin-nav compiled template
    templatizer["admin"]["auth"]["create"]["admin-nav"] = function tmpl_admin_auth_create_admin_nav(locals) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="side-nav admin-nav">');
        var targetUrl;
        if (window.location.hostname.indexOf("beta") >= 0) {
            targetUrl = "http://cof-beta.finanzero.com.br";
        } else {
            targetUrl = "http://cof.finanzero.com.br";
        }
        buf.push('<div class="side-nav-header"><a href="/admin">Admin</a></div><div class="side-nav-list"><ul><li><a href="/admin">Homepage</a></li><li><a href="/admin/applications">Applications</a></li><li><a href="/admin/export">Export</a></li><li><a href="/admin/suppliers">Suppliers</a></li><li><a href="/admin/auth">Users</a></li><li><a' + jade.attr("href", targetUrl, true, false) + ' target="_blank">COF</a></li><li><a href="/logout">Sign out</a><div class="current-user">' + jade.escape((jade_interp = locals.user.name) == null ? "" : jade_interp) + "</div></li></ul></div></nav>");
        return buf.join("");
    };

    // admin/auth/index.jade compiled template
    templatizer["admin"]["auth"]["index"] = function tmpl_admin_auth_index(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(window) {
            buf.push('<div class="admin-site-layout"><div class="admin-nav-column">');
            buf.push(templatizer["admin"]["auth"]["index"]["admin-nav"](locals));
            buf.push('</div><div class="admin-content-column"><div class="header-panel"><div class="header-panel-left"><h2>Users</h2></div><div class="header-panel-right"><a href="./auth/create" class="btn primary">Create new user</a><ul class="role-selector"><li><a href="./auth?role=admin" class="btn">Admins</a></li><li><a href="./auth?role=supplier" class="btn">Suppliers</a></li><li><a href="./auth?role=affiliate" class="btn">Affiliates</a></li><li><a href="./auth?role=advisor" class="btn">Advisors</a></li><li><a href="./auth?role=sales" class="btn">Sales</a></li></ul></div></div>');
            buf.push(templatizer["admin"]["auth"]["index"]["auth-list"]());
            buf.push("</div></div>");
        }).call(this, "window" in locals_for_with ? locals_for_with.window : typeof window !== "undefined" ? window : undefined);
        return buf.join("");
    };

    // admin/auth/index.jade:auth-list compiled template
    templatizer["admin"]["auth"]["index"]["auth-list"] = function tmpl_admin_auth_index_auth_list() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<table class="auth-list"><thead><tr><th>Name</th><th>E-mail</th><th>Telephone number</th><th>Role</th><th>Group</th><th></th></tr></thead><tbody class="auth-list-items"><tr class="auth-list-item"><td class="name"></td><td class="email"></td><td class="telephoneNumber"></td><td class="role"></td><td class="group"></td><td class="right"><a class="btn details">Details</a></td></tr></tbody></table>');
        return buf.join("");
    };


    // admin/auth/index.jade:admin-nav compiled template
    templatizer["admin"]["auth"]["index"]["admin-nav"] = function tmpl_admin_auth_index_admin_nav(locals) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="side-nav admin-nav">');
        var targetUrl;
        if (window.location.hostname.indexOf("beta") >= 0) {
            targetUrl = "http://cof-beta.finanzero.com.br";
        } else {
            targetUrl = "http://cof.finanzero.com.br";
        }
        buf.push('<div class="side-nav-header"><a href="/admin">Admin</a></div><div class="side-nav-list"><ul><li><a href="/admin">Homepage</a></li><li><a href="/admin/applications">Applications</a></li><li><a href="/admin/export">Export</a></li><li><a href="/admin/suppliers">Suppliers</a></li><li><a href="/admin/auth">Users</a></li><li><a' + jade.attr("href", targetUrl, true, false) + ' target="_blank">COF</a></li><li><a href="/logout">Sign out</a><div class="current-user">' + jade.escape((jade_interp = locals.user.name) == null ? "" : jade_interp) + "</div></li></ul></div></nav>");
        return buf.join("");
    };

    // admin/auth/view.jade compiled template
    templatizer["admin"]["auth"]["view"] = function tmpl_admin_auth_view(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(window) {
            buf.push('<div class="admin-site-layout"><div class="admin-nav-column">');
            buf.push(templatizer["admin"]["auth"]["view"]["admin-nav"](locals));
            buf.push('</div><div class="admin-content-column"><div class="admin-splitview"><div class="input-column"><div class="header-panel"><div class="header-panel-left"><h2>Update user</h2></div></div>');
            buf.push(templatizer["admin"]["auth"]["view"]["auth-form"]("../auth", locals.id));
            buf.push('</div><div class="action-column">');
            buf.push(templatizer["admin"]["auth"]["view"]["auth-password"](locals.id));
            buf.push("</div></div></div></div>");
        }).call(this, "window" in locals_for_with ? locals_for_with.window : typeof window !== "undefined" ? window : undefined);
        return buf.join("");
    };

    // admin/auth/view.jade:auth-password compiled template
    templatizer["admin"]["auth"]["view"]["auth-password"] = function tmpl_admin_auth_view_auth_password(id) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<form class="form auth-password-form"><input type="hidden" name="id"' + jade.attr("value", id, true, false) + '/><div class="sections activate-password hide"><div class="section"><h3>Activate password login</h3><div class="input-container"><div class="label-container"><label>Enter a password</label></div><div class="controls"><input type="text" name="newPassword" data-validate="data-validate" data-validate-required="You must enter a new password"/></div></div></div><div class="section actions"><button type="submit" class="btn btn-large primary">Activate password login</button></div></div><div class="sections deactivate-password hide"><div class="section"><h3>Deactivate password</h3></div><div class="section actions"><button type="submit" class="btn btn-large warning">Deactivate password login</button></div></div></form>');
        return buf.join("");
    };


    // admin/auth/view.jade:auth-form compiled template
    templatizer["admin"]["auth"]["view"]["auth-form"] = function tmpl_admin_auth_view_auth_form(returnUrl, id) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<form class="form auth-form"><div class="sections">');
        if (id) {
            buf.push('<input type="hidden" name="id"' + jade.attr("value", id, true, false) + "/>");
        }
        buf.push('<div class="section"><h3>Basic details</h3><div class="input-container"><div class="label-container"><label>Name</label></div><div class="controls"><input type="text" name="name" data-validate="data-validate" data-validate-required="You must enter a name" class="small"/></div></div><div class="input-container"><div class="label-container"><label>E-mail</label></div><div class="controls"><input type="email" name="email" data-validate="data-validate" data-validate-required="You must enter an email" class="small"/></div></div><div class="input-container"><div class="label-container"><label>Telephone number</label></div><div class="controls"><input autocomplete="off" type="tel" name="telephoneNumber" data-validate="data-validate" data-validate-required="You must enter a telephone number" class="small"/></div></div></div><div class="section"><div class="input-container"><div class="label-container"><label>Role</label></div><div class="controls"><select name="role" class="small"><option value="admin">Administrator</option><option value="supplier">Supplier</option><option value="customer">Customer</option><option value="affiliate">Affiliate</option><option value="sales">Sales</option><option value="advisor">Advisor</option></select></div></div><div class="input-container"><div class="label-container"><label>Group</label></div><div class="control"><select name="group" class="small"><option value="">Select a group</option></select><input type="text" name="group" placeholder="Enter new group name" class="small"/><br/><br/><a href="javascript:void()" class="group-toggle">Create new group</a></div></div></div><div class="section"><div class="input-container"><div class="label-container"><label>API-Key</label></div><div class="controls"><input type="text" name="apiKey" class="small"/></div></div><div class="input-container"><div class="label-container"><label>API-Secret</label></div><div class="controls"><input type="text" name="apiSecret" class="small"/></div></div></div></div><div class="section actions"><button type="submit" class="btn btn-large primary">Save</button><span>or </span><a' + jade.attr("href", returnUrl, true, false) + ">cancel</a></div></form>");
        return buf.join("");
    };


    // admin/auth/view.jade:admin-nav compiled template
    templatizer["admin"]["auth"]["view"]["admin-nav"] = function tmpl_admin_auth_view_admin_nav(locals) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="side-nav admin-nav">');
        var targetUrl;
        if (window.location.hostname.indexOf("beta") >= 0) {
            targetUrl = "http://cof-beta.finanzero.com.br";
        } else {
            targetUrl = "http://cof.finanzero.com.br";
        }
        buf.push('<div class="side-nav-header"><a href="/admin">Admin</a></div><div class="side-nav-list"><ul><li><a href="/admin">Homepage</a></li><li><a href="/admin/applications">Applications</a></li><li><a href="/admin/export">Export</a></li><li><a href="/admin/suppliers">Suppliers</a></li><li><a href="/admin/auth">Users</a></li><li><a' + jade.attr("href", targetUrl, true, false) + ' target="_blank">COF</a></li><li><a href="/logout">Sign out</a><div class="current-user">' + jade.escape((jade_interp = locals.user.name) == null ? "" : jade_interp) + "</div></li></ul></div></nav>");
        return buf.join("");
    };

    // admin/export/index.jade compiled template
    templatizer["admin"]["export"]["index"] = function tmpl_admin_export_index(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(Date, window) {
            buf.push('<div class="admin-site-layout"><div class="admin-nav-column">');
            buf.push(templatizer["admin"]["export"]["index"]["admin-nav"](locals));
            buf.push('</div><div class="admin-content-column"><div class="admin-splitview">           <div class="input-column"><div class="header-panel"><div class="header-panel-left"><h2>Export customers</h2></div></div><form class="application-exporter"><div class="section"><h3>Query</h3><div class="three-col"><div class="col"><div class="input-container"><div class="label-container"><label>Status</label></div><div class="controls"><select name="status"><option value="">Select status</option><option value="lead">Lead</option><option value="started">Started</option><option value="has-bids">Has-bids</option><option value="accept">Accept</option><option value="follow-up">Follow up</option><option value="closed">Closed</option><option value="archive">Archive</option></select></div></div></div><div class="col"><div class="input-container"><div class="label-container"><label>Security type</label></div><div class="controls"><select name="securityType"><option value="">*</option><option value="car">Vehicle</option><option value="no-security">No Security</option></select></div></div></div><div class="col"><div class="input-container"><div class="label-container"><label>Security is owned?</label></div><div class="controls"><select name="securityIsOwned"><option value="">*</option><option value="true">Yes (re-financing)</option><option value="false">No (financing)</option></select></div></div></div><div class="col"><div class="input-container"><div class="label-container"><label>Created after</label></div><div class="controls">');
            buf.push(templatizer["admin"]["export"]["index"]["date-editor"]("createdAfter"));
            buf.push('</div></div></div></div></div><div class="section"><div class="three-col"><div class="col"><div class="input-container"><div class="label-container"><label>Output format</label></div><div class="controls"><select name="outputFormat"><option value="">Select one output format</option><option value="portocred">Banks Format (excel)</option><option value="general">General CSV file</option></select></div></div></div></div></div><div class="section"><button type="submit" class="btn primary">Create CSV download</button></div></form></div><div class="action-column"><span>&nbsp;</span></div></div></div></div>');
        }).call(this, "Date" in locals_for_with ? locals_for_with.Date : typeof Date !== "undefined" ? Date : undefined, "window" in locals_for_with ? locals_for_with.window : typeof window !== "undefined" ? window : undefined);
        return buf.join("");
    };

    // admin/export/index.jade:date-editor compiled template
    templatizer["admin"]["export"]["index"]["date-editor"] = function tmpl_admin_export_index_date_editor(name, value, initialYear, validadeMessage) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.attr("data-initial-year", initialYear || new Date().getFullYear(), true, false) + ' class="date-editor"><input type="hidden"' + jade.attr("name", name, true, false) + jade.attr("value", value, true, false) + '/><select data-validate="data-validate"' + jade.attr("data-validate-required", validadeMessage, true, false) + ' class="day"></select><select data-validate="data-validate"' + jade.attr("data-validate-required", validadeMessage, true, false) + ' class="month"></select><select data-validate="data-validate"' + jade.attr("data-validate-required", validadeMessage, true, false) + ' class="year"></select></div>');
        return buf.join("");
    };


    // admin/export/index.jade:admin-nav compiled template
    templatizer["admin"]["export"]["index"]["admin-nav"] = function tmpl_admin_export_index_admin_nav(locals) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="side-nav admin-nav">');
        var targetUrl;
        if (window.location.hostname.indexOf("beta") >= 0) {
            targetUrl = "http://cof-beta.finanzero.com.br";
        } else {
            targetUrl = "http://cof.finanzero.com.br";
        }
        buf.push('<div class="side-nav-header"><a href="/admin">Admin</a></div><div class="side-nav-list"><ul><li><a href="/admin">Homepage</a></li><li><a href="/admin/applications">Applications</a></li><li><a href="/admin/export">Export</a></li><li><a href="/admin/suppliers">Suppliers</a></li><li><a href="/admin/auth">Users</a></li><li><a' + jade.attr("href", targetUrl, true, false) + ' target="_blank">COF</a></li><li><a href="/logout">Sign out</a><div class="current-user">' + jade.escape((jade_interp = locals.user.name) == null ? "" : jade_interp) + "</div></li></ul></div></nav>");
        return buf.join("");
    };

    // admin/index.jade compiled template
    templatizer["admin"]["index"] = function tmpl_admin_index(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(window) {
            buf.push('<div class="admin-site-layout"><div class="admin-nav-column">');
            buf.push(templatizer["admin"]["index"]["admin-nav"](locals));
            buf.push('</div><div class="admin-content-column"><h3>Admin index</h3></div></div>');
        }).call(this, "window" in locals_for_with ? locals_for_with.window : typeof window !== "undefined" ? window : undefined);
        return buf.join("");
    };

    // admin/index.jade:admin-nav compiled template
    templatizer["admin"]["index"]["admin-nav"] = function tmpl_admin_index_admin_nav(locals) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="side-nav admin-nav">');
        var targetUrl;
        if (window.location.hostname.indexOf("beta") >= 0) {
            targetUrl = "http://cof-beta.finanzero.com.br";
        } else {
            targetUrl = "http://cof.finanzero.com.br";
        }
        buf.push('<div class="side-nav-header"><a href="/admin">Admin</a></div><div class="side-nav-list"><ul><li><a href="/admin">Homepage</a></li><li><a href="/admin/applications">Applications</a></li><li><a href="/admin/export">Export</a></li><li><a href="/admin/suppliers">Suppliers</a></li><li><a href="/admin/auth">Users</a></li><li><a' + jade.attr("href", targetUrl, true, false) + ' target="_blank">COF</a></li><li><a href="/logout">Sign out</a><div class="current-user">' + jade.escape((jade_interp = locals.user.name) == null ? "" : jade_interp) + "</div></li></ul></div></nav>");
        return buf.join("");
    };

    // admin/suppliers/create.jade compiled template
    templatizer["admin"]["suppliers"]["create"] = function tmpl_admin_suppliers_create(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(window) {
            buf.push('<div class="admin-site-layout"><div class="admin-nav-column">');
            buf.push(templatizer["admin"]["suppliers"]["create"]["admin-nav"](locals));
            buf.push('</div><div class="admin-content-column"><div class="admin-splitview">           <div class="input-column"><div class="header-panel"><div class="header-panel-left"><h2>Create new supplier</h2></div></div>');
            buf.push(templatizer["admin"]["suppliers"]["create"]["supplier-form"]("../suppliers"));
            buf.push('</div><div class="action-column"><span>&nbsp;</span></div></div></div></div>');
        }).call(this, "window" in locals_for_with ? locals_for_with.window : typeof window !== "undefined" ? window : undefined);
        return buf.join("");
    };

    // admin/suppliers/create.jade:supplier-form compiled template
    templatizer["admin"]["suppliers"]["create"]["supplier-form"] = function tmpl_admin_suppliers_create_supplier_form(returnUrl, id) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<form class="form supplier-form">');
        if (id) {
            buf.push('<input type="hidden" name="id"' + jade.attr("value", id, true, false) + "/>");
        }
        buf.push('<div class="sections"><div class="section"><h3>Basic details</h3><div class="input-container"><div class="label-container"><label>Name</label></div><div class="controls"><input type="text" name="name" data-validate="data-validate" data-validate-required="Entre o nome da instituição que será usado nas comunicações" class="small"/></div><div class="label-container"><label>Internal Name</label></div><div class="internal-name-input"><div class="controls"><input type="text" name="internalName" data-validate="data-validate" placeholder="examplebank" data-input-mask="SSSSSSSSSS" data-validate-required="Use uma palavra curta, sem espacos ou traços" class="small"/><span>Esse campo não pode ser alterado depois de criado</span></div></div></div><div class="internal-name-show hide"><p>Internal Name</p></div><div class="input-container"><div class="label-container"><label>Logo image</label></div><div class="controls"><input type="text" name="logoImageUrl" placeholder="//url.to/image.png" data-validate="data-validate" data-validate-required="Informe o Logo da instituição" class="medium"/></div></div></div><div class="section"><h3>Contact information</h3><div class="input-container"><div class="label-container"><label>E-mail address</label></div><div class="controls"><input type="email" name="email" data-validate="data-validate" data-validate-required="Esse email é do contato principal" class="small"/></div></div><div class="input-container"><div class="label-container"><label>Website URL</label></div><div class="controls"><input type="text" name="websiteUrl" data-validate="data-validate" data-validate-required="Link para o Website para onde o cliente poderá ser redirecionado" class="medium"/></div></div></div><div class="section"><h3>Users</h3><div class="input-container"><div class="label-container"><div data-role="supplier" data-form-name="users" class="auth-selector"></div></div></div></div></div><div class="section actions"><button type="submit" class="btn btn-large primary">Save</button><span>or </span><a' + jade.attr("href", returnUrl, true, false) + ">cancel</a></div></form>");
        return buf.join("");
    };


    // admin/suppliers/create.jade:admin-nav compiled template
    templatizer["admin"]["suppliers"]["create"]["admin-nav"] = function tmpl_admin_suppliers_create_admin_nav(locals) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="side-nav admin-nav">');
        var targetUrl;
        if (window.location.hostname.indexOf("beta") >= 0) {
            targetUrl = "http://cof-beta.finanzero.com.br";
        } else {
            targetUrl = "http://cof.finanzero.com.br";
        }
        buf.push('<div class="side-nav-header"><a href="/admin">Admin</a></div><div class="side-nav-list"><ul><li><a href="/admin">Homepage</a></li><li><a href="/admin/applications">Applications</a></li><li><a href="/admin/export">Export</a></li><li><a href="/admin/suppliers">Suppliers</a></li><li><a href="/admin/auth">Users</a></li><li><a' + jade.attr("href", targetUrl, true, false) + ' target="_blank">COF</a></li><li><a href="/logout">Sign out</a><div class="current-user">' + jade.escape((jade_interp = locals.user.name) == null ? "" : jade_interp) + "</div></li></ul></div></nav>");
        return buf.join("");
    };

    // admin/suppliers/index.jade compiled template
    templatizer["admin"]["suppliers"]["index"] = function tmpl_admin_suppliers_index(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(window) {
            buf.push('<div class="admin-site-layout"><div class="admin-nav-column">');
            buf.push(templatizer["admin"]["suppliers"]["index"]["admin-nav"](locals));
            buf.push('</div><div class="admin-content-column"><div class="header-panel"><div class="header-panel-left"><h2>Suppliers</h2></div><div class="header-panel-right"><a href="./suppliers/create" class="btn primary">Create new supplier</a></div></div>');
            buf.push(templatizer["admin"]["suppliers"]["index"]["supplier-list"]());
            buf.push("</div></div>");
        }).call(this, "window" in locals_for_with ? locals_for_with.window : typeof window !== "undefined" ? window : undefined);
        return buf.join("");
    };

    // admin/suppliers/index.jade:supplier-list compiled template
    templatizer["admin"]["suppliers"]["index"]["supplier-list"] = function tmpl_admin_suppliers_index_supplier_list() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<table class="supplier-list"><thead><tr><th>Name</th><th>Website</th><th>Logo</th><th></th></tr></thead><tbody class="supplier-list-items"><tr class="supplier-list-item"><td class="name"></td><td class="websiteUrl"></td><td class="logo"></td><td class="right"><a class="btn details">Details</a></td></tr></tbody></table>');
        return buf.join("");
    };


    // admin/suppliers/index.jade:admin-nav compiled template
    templatizer["admin"]["suppliers"]["index"]["admin-nav"] = function tmpl_admin_suppliers_index_admin_nav(locals) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="side-nav admin-nav">');
        var targetUrl;
        if (window.location.hostname.indexOf("beta") >= 0) {
            targetUrl = "http://cof-beta.finanzero.com.br";
        } else {
            targetUrl = "http://cof.finanzero.com.br";
        }
        buf.push('<div class="side-nav-header"><a href="/admin">Admin</a></div><div class="side-nav-list"><ul><li><a href="/admin">Homepage</a></li><li><a href="/admin/applications">Applications</a></li><li><a href="/admin/export">Export</a></li><li><a href="/admin/suppliers">Suppliers</a></li><li><a href="/admin/auth">Users</a></li><li><a' + jade.attr("href", targetUrl, true, false) + ' target="_blank">COF</a></li><li><a href="/logout">Sign out</a><div class="current-user">' + jade.escape((jade_interp = locals.user.name) == null ? "" : jade_interp) + "</div></li></ul></div></nav>");
        return buf.join("");
    };

    // admin/suppliers/view.jade compiled template
    templatizer["admin"]["suppliers"]["view"] = function tmpl_admin_suppliers_view(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(window) {
            buf.push('<div class="admin-site-layout"><div class="admin-nav-column">');
            buf.push(templatizer["admin"]["suppliers"]["view"]["admin-nav"](locals));
            buf.push('</div><div class="admin-content-column"><div class="admin-splitview">           <div class="input-column"><div class="header-panel"><div class="header-panel-left"><h2>Edit supplier</h2></div></div>');
            buf.push(templatizer["admin"]["suppliers"]["view"]["supplier-form"]("../suppliers", locals.id));
            buf.push("</div></div></div></div>");
        }).call(this, "window" in locals_for_with ? locals_for_with.window : typeof window !== "undefined" ? window : undefined);
        return buf.join("");
    };

    // admin/suppliers/view.jade:supplier-form compiled template
    templatizer["admin"]["suppliers"]["view"]["supplier-form"] = function tmpl_admin_suppliers_view_supplier_form(returnUrl, id) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<form class="form supplier-form">');
        if (id) {
            buf.push('<input type="hidden" name="id"' + jade.attr("value", id, true, false) + "/>");
        }
        buf.push('<div class="sections"><div class="section"><h3>Basic details</h3><div class="input-container"><div class="label-container"><label>Name</label></div><div class="controls"><input type="text" name="name" data-validate="data-validate" data-validate-required="Entre o nome da instituição que será usado nas comunicações" class="small"/></div><div class="label-container"><label>Internal Name</label></div><div class="internal-name-input"><div class="controls"><input type="text" name="internalName" data-validate="data-validate" placeholder="examplebank" data-input-mask="SSSSSSSSSS" data-validate-required="Use uma palavra curta, sem espacos ou traços" class="small"/><span>Esse campo não pode ser alterado depois de criado</span></div></div></div><div class="internal-name-show hide"><p>Internal Name</p></div><div class="input-container"><div class="label-container"><label>Logo image</label></div><div class="controls"><input type="text" name="logoImageUrl" placeholder="//url.to/image.png" data-validate="data-validate" data-validate-required="Informe o Logo da instituição" class="medium"/></div></div></div><div class="section"><h3>Contact information</h3><div class="input-container"><div class="label-container"><label>E-mail address</label></div><div class="controls"><input type="email" name="email" data-validate="data-validate" data-validate-required="Esse email é do contato principal" class="small"/></div></div><div class="input-container"><div class="label-container"><label>Website URL</label></div><div class="controls"><input type="text" name="websiteUrl" data-validate="data-validate" data-validate-required="Link para o Website para onde o cliente poderá ser redirecionado" class="medium"/></div></div></div><div class="section"><h3>Users</h3><div class="input-container"><div class="label-container"><div data-role="supplier" data-form-name="users" class="auth-selector"></div></div></div></div></div><div class="section actions"><button type="submit" class="btn btn-large primary">Save</button><span>or </span><a' + jade.attr("href", returnUrl, true, false) + ">cancel</a></div></form>");
        return buf.join("");
    };


    // admin/suppliers/view.jade:admin-nav compiled template
    templatizer["admin"]["suppliers"]["view"]["admin-nav"] = function tmpl_admin_suppliers_view_admin_nav(locals) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="side-nav admin-nav">');
        var targetUrl;
        if (window.location.hostname.indexOf("beta") >= 0) {
            targetUrl = "http://cof-beta.finanzero.com.br";
        } else {
            targetUrl = "http://cof.finanzero.com.br";
        }
        buf.push('<div class="side-nav-header"><a href="/admin">Admin</a></div><div class="side-nav-list"><ul><li><a href="/admin">Homepage</a></li><li><a href="/admin/applications">Applications</a></li><li><a href="/admin/export">Export</a></li><li><a href="/admin/suppliers">Suppliers</a></li><li><a href="/admin/auth">Users</a></li><li><a' + jade.attr("href", targetUrl, true, false) + ' target="_blank">COF</a></li><li><a href="/logout">Sign out</a><div class="current-user">' + jade.escape((jade_interp = locals.user.name) == null ? "" : jade_interp) + "</div></li></ul></div></nav>");
        return buf.join("");
    };

    // campaign/expired.jade compiled template
    templatizer["campaign"]["expired"] = function tmpl_campaign_expired(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        buf.push('<div class="blank-site-layout">');
        buf.push(templatizer["campaign"]["expired"]["main-nav"]());
        buf.push('<div class="content-container"><div class="outer-container expired"><h1>Link expirado!</h1><p>O link que você está acessando é de uma campanha finalizada ou já foi utilizado.</p><p> <a href="/terms" target="_blank">Clique aqui </a>&nbsp;e faça o login no sistema, para consultar os seus pedidos de crédito.</p></div><div class="footer-container">');
        buf.push(templatizer["campaign"]["expired"]["footer"]());
        buf.push("</div></div></div>");
        return buf.join("");
    };

    // campaign/expired.jade:footer compiled template
    templatizer["campaign"]["expired"]["footer"] = function tmpl_campaign_expired_footer() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="footer"><div class="footer-inner"><div class="footer-logo-container"><div class="footer-logo"><img src="/images/new-logo-footer.png"/></div><div class="security-section"><div id="DigiCertClickID_9hlvA_e5" data-language="pt" class="certisign-seal"><!-- a(href="https://www.digicert.com/ssl-certificate.htm") SSL Certificates--></div></div></div></div><div class="footer-inner"><div class="footer-section"><p>FinanZero Brasil Serviços Online Ltda. CNPJ/MF 23.722.194/0001-34<br/>Av. Paulista, 1499, Conj. 2110 – São Paulo, SP - CEP: 01311-200<a href="tel:0800 607-3001"><i class="fa fa-phone"></i>0800 607-3001</a></p></div></div><div class="footer-inner"><div class="footer-legal"><p class="small">A FinanZero é uma empresa intermediadora do processo de concessão de financiamento veicular entre bancos e clientes. Nós negociamos o seu financiamento com os bancos para buscar as melhores taxas do mercado. Não somos uma instituição financeira. Somos correspondentes bancários, regulamentados pela lei 3.954/11 do Banco Central do Brasil.<script>var __dcid = __dcid || [];\n__dcid.push(["DigiCertClickID_9hlvA_e5", "3", "m", "black", "9hlvA_e5"]);\n(function(){var cid=document.createElement("script");\ncid.async=true;\ncid.src="//seal.digicert.com/seals/cascade/seal.min.js";\nvar s = document.getElementsByTagName("script");\nvar ls = s[(s.length - 1)];ls.parentNode.insertBefore(cid, ls.nextSibling);}());</script></p></div></div></div>');
        return buf.join("");
    };


    // campaign/expired.jade:main-nav compiled template
    templatizer["campaign"]["expired"]["main-nav"] = function tmpl_campaign_expired_main_nav() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="top-nav main-nav"><div class="top-nav-left"><div class="top-nav-logo"><a href="/"><div class="logo-image-container"><img src="/images/logo.png"/></div></a></div></div><div class="top-nav-center"><div class="top-nav-contact"><div class="top-nav-contact-header"></div></div></div><div class="top-nav-right"><ul><li class="login-link"><a href="/login"><i class="fa fa-lock"></i>Já fiz meu pedido</a></li></ul></div></nav>');
        return buf.join("");
    };

    // campaign/view.jade compiled template
    templatizer["campaign"]["view"] = function tmpl_campaign_view(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(Object, campaign, supplier) {
            buf.push('<div class="campaign-site-layout">');
            buf.push(templatizer["campaign"]["view"]["campaign-nav"](locals));
            buf.push('<div class="public-site-content-container"><div class="content-container">');
            buf.push(templatizer["campaign"]["view"]["start-page-campaign"](supplier, campaign));
            buf.push('</div><div class="about-us">');
            buf.push(templatizer["campaign"]["view"]["about-us"]());
            buf.push('</div><div class="more-details"><div class="left">');
            buf.push(templatizer["campaign"]["view"]["references"]());
            buf.push(templatizer["campaign"]["view"]["in-the-media"]());
            buf.push(templatizer["campaign"]["view"]["faq"]());
            buf.push('</div><div class="right">');
            buf.push(templatizer["campaign"]["view"]["contact-us"]());
            buf.push('</div></div></div><div class="footer-container">');
            buf.push(templatizer["campaign"]["view"]["footer"]());
            buf.push("</div></div>");
        }).call(this, "Object" in locals_for_with ? locals_for_with.Object : typeof Object !== "undefined" ? Object : undefined, "campaign" in locals_for_with ? locals_for_with.campaign : typeof campaign !== "undefined" ? campaign : undefined, "supplier" in locals_for_with ? locals_for_with.supplier : typeof supplier !== "undefined" ? supplier : undefined);
        return buf.join("");
    };

    // campaign/view.jade:campaign-form compiled template
    templatizer["campaign"]["view"]["campaign-form"] = function tmpl_campaign_view_campaign_form(campaign) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<form class="campaign-form"><input type="hidden" name="campaignId"' + jade.attr("value", campaign.id, true, false) + '/><input type="hidden" name="campaignState"' + jade.attr("value", campaign.state, true, false) + '/><input type="hidden" name="supplier"' + jade.attr("value", campaign.supplier, true, false) + '/><input type="hidden" name="selectBank"' + jade.attr("value", campaign.questions && campaign.questions.bank ? "true" : "", true, false) + '/><h2 class="header-ready">Obrigado por confirmar seu interesse!</h2><h2 class="header-questions">Falta apenas um passo!</h2><div class="sections">');
        if (campaign.state === "ready") {
            buf.push('<div class="section">');
            if (campaign.supplier == "bv") {
                buf.push("<p>Você receberá uma ligação da BV Financeira em até 48h para completar o processo, sem necessidade de ir a uma loja.</p>");
            } else {
                buf.push("<p>Você receberá uma ligação em até 48h para completar o processo, sem necessidade de ir a uma loja.</p>");
            }
            buf.push("</div>");
        } else {
            if (campaign.questions["telephone"]) {
                buf.push('<div class="section telephone-section"><div class="label-container"><label>Confirme o celular para contato</label></div><div class="controls">');
                buf.push(templatizer["campaign"]["view"]["phone-number-campaign"](campaign.currentTelephone, campaign.stateFilter));
                buf.push("</div></div>");
            }
            if (campaign.questions["bank"]) {
                buf.push('<div class="section bank-section"><div class="label-container"><label>Escolha o Banco onde você tem conta</label></div><div class="controls">');
                buf.push(templatizer["campaign"]["view"]["bank-name-selector"]("bankName", "", "Selecione uma opção válida na lista", true));
                buf.push('</div><div class="label-container"> <label>Tipo da conta</label></div><div class="controls">');
                buf.push(templatizer["campaign"]["view"]["account-type-editor"]("accountType", "", true));
                buf.push("</div></div>");
            }
            if (campaign.questions["branch"]) {
                buf.push('<div class="section campaign-branch"><div class="label-container"><label>Escolha uma loja na lista abaixo para confirmar seu empréstimo pessoalmente.</label></div><div class="controls"><select name="branchCode" data-validate="data-validate" data-validate-required="Selecione uma filial" id="addressBankCampaign">                     <option value="">Selecione uma loja ...</option>');
                (function() {
                    var $obj = Object.keys(campaign.branches);
                    if ("number" == typeof $obj.length) {
                        for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                            var bc = $obj[$index];
                            buf.push("<option" + jade.attr("value", bc, true, false) + jade.attr("id", campaign.branches[bc].areaCode, true, false) + jade.attr("stateFilter", campaign.branches[bc].state.toLowerCase(), true, false) + ">" + jade.escape((jade_interp = campaign.branches[bc].address) == null ? "" : jade_interp) + ", " + jade.escape((jade_interp = campaign.branches[bc].streetNumber) == null ? "" : jade_interp) + ", " + jade.escape((jade_interp = campaign.branches[bc].city) == null ? "" : jade_interp) + " - " + jade.escape((jade_interp = campaign.branches[bc].state) == null ? "" : jade_interp) + "                      </option>");
                        }
                    } else {
                        var $l = 0;
                        for (var $index in $obj) {
                            $l++;
                            var bc = $obj[$index];
                            buf.push("<option" + jade.attr("value", bc, true, false) + jade.attr("id", campaign.branches[bc].areaCode, true, false) + jade.attr("stateFilter", campaign.branches[bc].state.toLowerCase(), true, false) + ">" + jade.escape((jade_interp = campaign.branches[bc].address) == null ? "" : jade_interp) + ", " + jade.escape((jade_interp = campaign.branches[bc].streetNumber) == null ? "" : jade_interp) + ", " + jade.escape((jade_interp = campaign.branches[bc].city) == null ? "" : jade_interp) + " - " + jade.escape((jade_interp = campaign.branches[bc].state) == null ? "" : jade_interp) + "                      </option>");
                        }
                    }
                }).call(this);
                buf.push('</select></div><div class="span">Você receberá um email confirmando o endereço da loja escolhida e os documentos que você precisa levar.</div></div><div class="section finish-callcenter hide"><p>Você receberá uma ligação da BV Financeira em até 48h para completar o processo, sem necessidade de ir a uma loja.</p></div><div class="section finish-store hide"><p>Você receberá um email confirmando o endereço da loja escolhida e os documentos que você precisa levar.</p></div>');
            }
            buf.push('<div class="cta-container campaign-not-ready"><div class="div"><button type="submit" class="btn btn-large primary"><i id="enabled" class="fa fa-check-circle"></i><i id="disabled" class="fa fa-spinner fa-pulse hide"></i><span>Confirmo meu pedido</span></button></div><div class="alert errors hide">Existem erros de prenchimento nessa página. Por favor corrija antes de continuar.</div></div>');
        }
        buf.push('<div class="deposit-disclaimer"><b>ATENÇÃO: NÃO faça nenhum depósito ou pagamento para análise ou liberação do empréstimo.</b><div class="deposit-inner"> Nosso serviço é gratuito, portanto nós nunca pedimos pagamentos antecipados. Você só vai pagar seu empréstimo ou financiamento, diretamente para o banco ou financeira, após receber o crédito.</div></div></div></form>');
        return buf.join("");
    };


    // campaign/view.jade:phone-number-campaign compiled template
    templatizer["campaign"]["view"]["phone-number-campaign"] = function tmpl_campaign_view_phone_number_campaign(initialValue, stateFilter) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="phone-number-campaign"><input autocomplete="off" type="tel" placeholder="(11) XXXXX XXXX" name="telephoneNumber" data-input-mask="(99) 99999 9999" data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("stateFilter", stateFilter, true, false) + ' data-validate-required="Preencha um número de telefone" data-validate-telephone="Preencha um número de telefone válido"/></div>');
        return buf.join("");
    };


    // campaign/view.jade:bank-name-selector compiled template
    templatizer["campaign"]["view"]["bank-name-selector"] = function tmpl_campaign_view_bank_name_selector(name, initialValue, message, mandatory) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Necessário";
        buf.push('<div class="bank-name-selector"><select' + jade.attr("name", name, true, false) + ' id="select_bank_name" data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + '><option value="">Selecione...</option>');
        if (!mandatory) {
            buf.push('<option value="no">Não tenho conta em Banco      </option>');
        }
        buf.push("</select></div>");
        return buf.join("");
    };


    // campaign/view.jade:account-type-editor compiled template
    templatizer["campaign"]["view"]["account-type-editor"] = function tmpl_campaign_view_account_type_editor(name, initialValue, required, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = required ? message || "Necessário" : undefined;
        var documents = [];
        buf.push('<div class="account-type-editor"><input type="hidden" id="init_val"' + jade.attr("value", initialValue, true, false) + "/><select" + jade.attr("name", name, true, false) + ' data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + ">");
        if (required) {
            buf.push('<option value="">Selecione...</option>');
        } else {
            buf.push('<option value="">Sem conta bancária</option>');
        }
        buf.push("</select></div>");
        return buf.join("");
    };


    // campaign/view.jade:start-page-campaign compiled template
    templatizer["campaign"]["view"]["start-page-campaign"] = function tmpl_campaign_view_start_page_campaign(supplier, campaign) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="outer-container"><div class="main-left"><div class="start-page-intro-boxes"><div class="start-page-intro-box box-1">');
        if (supplier === "bv") {
            buf.push("<h1>A BV pré-aprovou um empréstimo para você</h1>");
        } else if (supplier === "cbss") {
            buf.push("<h1>Temos um empréstimo pré-aprovado para você</h1>");
        }
        buf.push('<div class="main-image"><div class="main-image-container campaign"><img src="/images/main-new-image.png?v=2"/></div></div>');
        if (supplier === "bv") {
            buf.push("<p>A FinanZero e a BV Financeira tem um empréstimo pré-aprovado para você nos valores indicados no seu email ou SMS.</p>");
        } else if (supplier === "cbss") {
            buf.push("<p>A FinanZero e o ibi (correspondente do Banco CBSS) tem um empréstimo pré-aprovado para você nos valores indicados no seu email ou SMS.</p>");
        }
        buf.push('<p>O empréstimo pessoal é a forma mais descomplicada de conseguir dinheiro emprestado para você a realizar os seus sonhos ou organizar suas contas.</p></div></div></div><div class="main-right">');
        buf.push(templatizer["campaign"]["view"]["campaign-form"](campaign));
        buf.push("</div></div>");
        return buf.join("");
    };


    // campaign/view.jade:start-page-intro compiled template
    templatizer["campaign"]["view"]["start-page-intro"] = function tmpl_campaign_view_start_page_intro() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="start-page-intro-boxes"><div class="start-page-intro-box box-1"><h1>O parceiro ideal para empréstimo pessoal</h1><div class="main-image"><div class="main-image-container"><img src="/images/main-new-image.png?v=2"/></div></div><p>O empréstimo pessoal é uma opção interessante para quem precisa de dinheiro emprestado rápido para resolver imprevistos ou completar um projeto em andamento.</p><b>Mais vantajoso que cheque especial e cartão de crédito.</b><h2>Tem um carro ou caminhão quitado a partir do ano 2002?</h2><p>Então o <strong> refinanciamento de veículo </strong> pode ser o empréstimo perfeito para você. Além de taxas ainda mais atraentes do que o crédito pessoal, você continua com toda liberdade de usar seu veículo durante o período contratado.</p><div class="start-page-intro-phone"><h5>Fale com a nossa equipe de especialistas:</h5><a href="tel:08006073001">0800 607-3001</a></div></div></div>');
        return buf.join("");
    };


    // campaign/view.jade:footer compiled template
    templatizer["campaign"]["view"]["footer"] = function tmpl_campaign_view_footer() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="footer"><div class="footer-inner"><div class="footer-logo-container"><div class="footer-logo"><img src="/images/new-logo-footer.png"/></div><div class="security-section"><div id="DigiCertClickID_9hlvA_e5" data-language="pt" class="certisign-seal"><!-- a(href="https://www.digicert.com/ssl-certificate.htm") SSL Certificates--></div></div></div></div><div class="footer-inner"><div class="footer-section"><p>FinanZero Brasil Serviços Online Ltda. CNPJ/MF 23.722.194/0001-34<br/>Av. Paulista, 1499, Conj. 2110 – São Paulo, SP - CEP: 01311-200<a href="tel:0800 607-3001"><i class="fa fa-phone"></i>0800 607-3001</a></p></div></div><div class="footer-inner"><div class="footer-legal"><p class="small">A FinanZero é uma empresa intermediadora do processo de concessão de financiamento veicular entre bancos e clientes. Nós negociamos o seu financiamento com os bancos para buscar as melhores taxas do mercado. Não somos uma instituição financeira. Somos correspondentes bancários, regulamentados pela lei 3.954/11 do Banco Central do Brasil.<script>var __dcid = __dcid || [];\n__dcid.push(["DigiCertClickID_9hlvA_e5", "3", "m", "black", "9hlvA_e5"]);\n(function(){var cid=document.createElement("script");\ncid.async=true;\ncid.src="//seal.digicert.com/seals/cascade/seal.min.js";\nvar s = document.getElementsByTagName("script");\nvar ls = s[(s.length - 1)];ls.parentNode.insertBefore(cid, ls.nextSibling);}());</script></p></div></div></div>');
        return buf.join("");
    };


    // campaign/view.jade:campaign-nav compiled template
    templatizer["campaign"]["view"]["campaign-nav"] = function tmpl_campaign_view_campaign_nav(locals) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="top-nav main-nav"><div class="top-nav-left"><div class="top-nav-logo"><a href="/"><div class="logo-image-container"><img src="/images/logo.png"/></div></a></div></div><div class="top-nav-center"><div class="top-nav-campaign"></div></div><div class="top-nav-right"><div class="top-partner-logo">');
        if (locals.supplier === "bv") {
            buf.push('<img src="/images/partner-logos/bv-correspondente.gif" alt="BV Financeira"/>');
        } else if (locals.supplier === "cbss") {
            buf.push('<img src="/images/partner-logos/ibi.png" alt="ibi"/>');
        }
        buf.push("</div></div></nav>");
        return buf.join("");
    };


    // campaign/view.jade:references compiled template
    templatizer["campaign"]["view"]["references"] = function tmpl_campaign_view_references() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="references">');
        buf.push(templatizer["campaign"]["view"]["partner-listing"]());
        buf.push("</div>");
        return buf.join("");
    };


    // campaign/view.jade:partner-listing compiled template
    templatizer["campaign"]["view"]["partner-listing"] = function tmpl_campaign_view_partner_listing() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="partner-listing"><h2>Nossos Parceiros</h2><ul><li><div class="image-container"><img src="/images/partner-logos/bv-correspondente.gif" alt="BV Financeira" height="100"/></div></li><li><div class="image-container"><img src="/images/partner-logos/banco-pan.png" alt="Banco Pan" height="38"/></div><div class="image-container"><img src="/images/partner-logos/portocred.png" alt="Portocred" height="50"/></div></li></ul><ul><li><div class="image-container"><img src="/images/partner-logos/simplic.png" alt="Simplic" height="42"/></div></li><li><div class="image-container"><img src="/images/partner-logos/creditas.png" alt="Creditas" width="130"/></div></li></ul><ul><li> <div class="image-container"><img src="/images/partner-logos/olxcompara.png"/></div></li></ul></div>');
        return buf.join("");
    };


    // campaign/view.jade:in-the-media compiled template
    templatizer["campaign"]["view"]["in-the-media"] = function tmpl_campaign_view_in_the_media() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="in-the-media"><div class="media-listing"><h2>Fomos citados</h2>');
        buf.push(templatizer["campaign"]["view"]["media-listing"]());
        buf.push("</div></div>");
        return buf.join("");
    };


    // campaign/view.jade:media-listing compiled template
    templatizer["campaign"]["view"]["media-listing"] = function tmpl_campaign_view_media_listing() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="image-container"><a target="_blank" href="http://www.valor.com.br/financas/4533065/de-capital-sueco-finanzero-faz-parceria-com-omni-e-banco-pan"><img src="/images/media-logos/valor-economico.png"/></a></div><div class="image-container"><a target="_blank" href="http://www.infomoney.com.br/minhas-financas/consumo/noticia/5187201/empresa-sueca-chega-brasil-promete-menores-taxas-financiamento"><img src="/images/media-logos/infomoney.png"/></a></div><div class="image-container"><a target="_blank" href="http://oglobo.globo.com/economia/criatividade-sueca-empresas-fintech-desembarcam-no-brasil-19964457"><img src="/images/media-logos/oglobo.png"/></a></div>');
        return buf.join("");
    };


    // campaign/view.jade:faq compiled template
    templatizer["campaign"]["view"]["faq"] = function tmpl_campaign_view_faq() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="faq"><h2>Perguntas mais frequentes</h2><ul><li><h4>Preciso pagar pelos serviços da FinanZero?</h4><p>Não, nossos serviços são 100% gratuitos. Nós NUNCA pedimos depósitos para cotação ou contratação de serviços.Em caso de dúvida, contate nosso atendimento.</p></li><li><h4>Quais serviços financeiros posso contratar?</h4><p> Nós temos três opções para você: empréstimo pessoal, refinanciamento ou financiamento de veículos. <br />Atualmente não atendemos negativados.</p></li><li></li></ul><ul><li><h4>A FinanZero é uma financeira?</h4><p> Não, a FinanZero é um correspondente bancário, que intermedia o processo de empréstimo ou financiamento entre o banco e o cliente.</p></li><li><h4>Fiz o cadastro, mas ainda não obtive resposta.</h4><p>Após o seu cadastro você pode acompanhar o status do seu pedido acessando o site da FinanZero.</p></li><li><i>Caso ainda tenha dúvidas, você pode nos contatar pelo telefone 0800 607-3001 ou pelo e-mail atendimento@finanzero.com.br</i></li></ul></div>');
        return buf.join("");
    };


    // campaign/view.jade:footer compiled template
    templatizer["campaign"]["view"]["footer"] = function tmpl_campaign_view_footer() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="footer"><div class="footer-inner"><div class="footer-logo-container"><div class="footer-logo"><img src="/images/new-logo-footer.png"/></div><div class="security-section"><div id="DigiCertClickID_9hlvA_e5" data-language="pt" class="certisign-seal"><!-- a(href="https://www.digicert.com/ssl-certificate.htm") SSL Certificates--></div></div></div></div><div class="footer-inner"><div class="footer-section"><p>FinanZero Brasil Serviços Online Ltda. CNPJ/MF 23.722.194/0001-34<br/>Av. Paulista, 1499, Conj. 2110 – São Paulo, SP - CEP: 01311-200<a href="tel:0800 607-3001"><i class="fa fa-phone"></i>0800 607-3001</a></p></div></div><div class="footer-inner"><div class="footer-legal"><p class="small">A FinanZero é uma empresa intermediadora do processo de concessão de financiamento veicular entre bancos e clientes. Nós negociamos o seu financiamento com os bancos para buscar as melhores taxas do mercado. Não somos uma instituição financeira. Somos correspondentes bancários, regulamentados pela lei 3.954/11 do Banco Central do Brasil.<script>var __dcid = __dcid || [];\n__dcid.push(["DigiCertClickID_9hlvA_e5", "3", "m", "black", "9hlvA_e5"]);\n(function(){var cid=document.createElement("script");\ncid.async=true;\ncid.src="//seal.digicert.com/seals/cascade/seal.min.js";\nvar s = document.getElementsByTagName("script");\nvar ls = s[(s.length - 1)];ls.parentNode.insertBefore(cid, ls.nextSibling);}());</script></p></div></div></div>');
        return buf.join("");
    };


    // campaign/view.jade:contact-us compiled template
    templatizer["campaign"]["view"]["contact-us"] = function tmpl_campaign_view_contact_us() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="contact-us"><div class="contact-us_content"><div class="contact-us-info-column-1"><table><tr><h5>Fale com a gente</h5></tr><tr><a href="tel:08006073001"><i class="fa fa-phone" aria-hidden="true"></i> 0800 607-3001</a></tr><tr><a href="mailto:atendimento@finanzero.com.br">atendimento@finanzero.com.br</a></tr></table></div><div class="contact-us-info-column-2"><table><tr><h5>Horário de atendimento</h5></tr><tr><p>De Segunda à Sexta - Das 9h às 18h</p></tr></table></div><div class="social-media-section"><div class="image-container"><h2><a href="https://www.facebook.com/finanzero/"><i class="fa fa-facebook-official"></i></a><a href="https://twitter.com/Finan_Zero"><i class="fa fa-twitter-square"></i></a><a href="https://www.linkedin.com/company/10386728"><i class="fa fa-linkedin-square"></i></a><a href="https://www.instagram.com/finanzero/"><i class="fa fa-instagram"></i></a></h2></div></div></div></div>');
        return buf.join("");
    };


    // campaign/view.jade:references compiled template
    templatizer["campaign"]["view"]["references"] = function tmpl_campaign_view_references() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="references">');
        buf.push(templatizer["campaign"]["view"]["partner-listing"]());
        buf.push("</div>");
        return buf.join("");
    };


    // campaign/view.jade:partner-listing compiled template
    templatizer["campaign"]["view"]["partner-listing"] = function tmpl_campaign_view_partner_listing() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="partner-listing"><h2>Nossos Parceiros</h2><ul><li><div class="image-container"><img src="/images/partner-logos/bv-correspondente.gif" alt="BV Financeira" height="100"/></div></li><li><div class="image-container"><img src="/images/partner-logos/banco-pan.png" alt="Banco Pan" height="38"/></div><div class="image-container"><img src="/images/partner-logos/portocred.png" alt="Portocred" height="50"/></div></li></ul><ul><li><div class="image-container"><img src="/images/partner-logos/simplic.png" alt="Simplic" height="42"/></div></li><li><div class="image-container"><img src="/images/partner-logos/creditas.png" alt="Creditas" width="130"/></div></li></ul><ul><li> <div class="image-container"><img src="/images/partner-logos/olxcompara.png"/></div></li></ul></div>');
        return buf.join("");
    };


    // campaign/view.jade:in-the-media compiled template
    templatizer["campaign"]["view"]["in-the-media"] = function tmpl_campaign_view_in_the_media() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="in-the-media"><div class="media-listing"><h2>Fomos citados</h2>');
        buf.push(templatizer["campaign"]["view"]["media-listing"]());
        buf.push("</div></div>");
        return buf.join("");
    };


    // campaign/view.jade:media-listing compiled template
    templatizer["campaign"]["view"]["media-listing"] = function tmpl_campaign_view_media_listing() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="image-container"><a target="_blank" href="http://www.valor.com.br/financas/4533065/de-capital-sueco-finanzero-faz-parceria-com-omni-e-banco-pan"><img src="/images/media-logos/valor-economico.png"/></a></div><div class="image-container"><a target="_blank" href="http://www.infomoney.com.br/minhas-financas/consumo/noticia/5187201/empresa-sueca-chega-brasil-promete-menores-taxas-financiamento"><img src="/images/media-logos/infomoney.png"/></a></div><div class="image-container"><a target="_blank" href="http://oglobo.globo.com/economia/criatividade-sueca-empresas-fintech-desembarcam-no-brasil-19964457"><img src="/images/media-logos/oglobo.png"/></a></div>');
        return buf.join("");
    };


    // campaign/view.jade:about-us compiled template
    templatizer["campaign"]["view"]["about-us"] = function tmpl_campaign_view_about_us() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="about-us"><div class="about-us_wrapper"><div class="about-us_content"><div class="about-left"><h2>Compare empréstimos sem sair de casa</h2><p>Somos um correspondente bancário, contamos com a experiência de uma empresa sueca para em 2015 lançar uma plataforma online de empréstimo, refinanciamento e financiamento de veículos.</p><P><strong> Buscamos de forma inteligente as melhores taxas disponíveis para você conseguir seu crédito.</strong></P><p>Com apenas um cadastro conosco, negociamos com vários bancos e financeiras opções de empréstimo pessoal ou refinanciamento de veículos de forma rápida e segura.</p><p>As propostas dos nossos parceiros, BV Financeira, Banco Pan, Simplic, Geru e muitos outros são enviadas por e-mail e podem ser re-confirmadas por telefone.</p><p>Após a confirmação de seus  documentos e assinatura do contrato, o dinheiro é transferido para sua conta corrente ou poupança.</p><p>Os nossos serviços são 100% gratuitos. Nós NUNCA pedimos depósitos ou pagamentos antecipados para cotação, simulação, reserva ou contratação de qualquer tipo de empréstimo, financiamento ou refinanciamento de veículos e atendemos em todo o Brasil.</p></div><div class="about-right">');
        buf.push(templatizer["campaign"]["view"]["in-the-media"]());
        buf.push(templatizer["campaign"]["view"]["references"]());
        buf.push('</div><div class="about-clear"></div></div></div></div>');
        return buf.join("");
    };

    // crm/applications/index.jade compiled template
    templatizer["crm"]["applications"]["index"] = function tmpl_crm_applications_index(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(status) {
            buf.push('<div class="admin-site-layout"><div class="admin-nav-column">');
            buf.push(templatizer["crm"]["applications"]["index"]["crm-nav"](locals));
            buf.push('</div><div class="admin-content-column"><div class="page-header"><div class="left"><h2>Aplicações</h2></div><div class="right"><select class="application-status-picker"><option value="all"' + jade.attr("selected", status === "all", true, false) + '>Todos</option><option value="has-bids"' + jade.attr("selected", status === "has-bids", true, false) + '>tem ofertas</option><option value="accept"' + jade.attr("selected", status === "accept", true, false) + '>Aceitaram</option><option value="follow-up"' + jade.attr("selected", status === "follow-up", true, false) + '>Dar seguimento</option></select></div></div><div class="crm-applications-index">');
            buf.push(templatizer["crm"]["applications"]["index"]["application-list"](locals, locals.applications));
            buf.push("</div></div></div>");
        }).call(this, "status" in locals_for_with ? locals_for_with.status : typeof status !== "undefined" ? status : undefined);
        return buf.join("");
    };

    // crm/applications/index.jade:application-list compiled template
    templatizer["crm"]["applications"]["index"]["application-list"] = function tmpl_crm_applications_index_application_list(locals, applications) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="application-list"> <div class="application-list-header"><div class="personal-details-column"> <h5>Detalhes pessoais</h5></div><div class="loan-column"> <h5>detalhes do empréstimo</h5></div><div class="status-column"> <h5>estatuto</h5></div><div class="cta-column"></div></div>');
        (function() {
            var $obj = applications;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var application = $obj[$index];
                    buf.push(templatizer["crm"]["applications"]["index"]["application-list-item"](locals, application));
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var application = $obj[$index];
                    buf.push(templatizer["crm"]["applications"]["index"]["application-list-item"](locals, application));
                }
            }
        }).call(this);
        buf.push("</div>");
        return buf.join("");
    };


    // crm/applications/index.jade:application-list-item compiled template
    templatizer["crm"]["applications"]["index"]["application-list-item"] = function tmpl_crm_applications_index_application_list_item(locals, application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="application-list-item"><div class="personal-details-column"><div class="name"> <h3>' + jade.escape((jade_interp = application.firstName) == null ? "" : jade_interp) + " " + jade.escape((jade_interp = application.lastName) == null ? "" : jade_interp) + '</h3></div><div class="personal-number">' + jade.escape((jade_interp = application.personalNumber) == null ? "" : jade_interp) + '</div><div class="email">' + jade.escape((jade_interp = application.email) == null ? "" : jade_interp) + '</div></div><div class="loan-column"><div class="applied-amount"> <b>Montante do empréstimo: </b><span>$R ' + jade.escape((jade_interp = application.appliedAmount) == null ? "" : jade_interp) + "</span></div>");
        if (application.loanPeriodInMonths) {
            buf.push('<div class="applied-amount"> <b>período de empréstimo: </b><span>' + jade.escape((jade_interp = application.loanPeriodInMonths) == null ? "" : jade_interp) + " mês</span></div>");
        } else {
            buf.push('<div class="applied-amount"> <b>período de empréstimo: </b><span>' + jade.escape((jade_interp = application.loanPeriodInYears) == null ? "" : jade_interp) + " anos</span></div>");
        }
        buf.push('<div class="security-type"> <b>Tipo de segurança:</b><span>' + jade.escape((jade_interp = application.securityType) == null ? "" : jade_interp) + '</span></div></div><div class="status-column">');
        if (application.closed) {
            buf.push("<span>Fechado, razão: " + jade.escape((jade_interp = application.closedReason) == null ? "" : jade_interp) + "</span>");
        }
        buf.push('<div class="status-lock">');
        if (application.salesLockBy === locals.user.id) {
            buf.push("<span>Bloqueado por você</span>");
        }
        buf.push('</div><div class="status-bids">');
        if (application.auction) {
            if (application.auction.bids.length == 0) {
                buf.push('<span class="status-no-bids">sem ofertas  </span>');
            } else {
                buf.push('<span class="status-bids">' + jade.escape((jade_interp = application.auction.bids.length) == null ? "" : jade_interp) + " ofertas</span>");
            }
        }
        buf.push('</div></div><div class="cta-column"><a' + jade.attr("href", "/crm/applications/" + application.id, true, false) + ' class="btn primary">Mostrar detalhes</a></div></div>');
        return buf.join("");
    };


    // crm/applications/index.jade:crm-nav compiled template
    templatizer["crm"]["applications"]["index"]["crm-nav"] = function tmpl_crm_applications_index_crm_nav(locals) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="side-nav crm-nav"><div class="side-nav-header"><a href="/crm">FinanZero</a></div><div class="side-nav-list"><ul><li><a href="/crm">Próximo cliente</a></li>');
        if (locals.isAdvisor) {
            buf.push('<li><a href="/crm/applications">Meus clientes anteriores</a></li>');
        }
        buf.push('<li><a href="/logout">Sair</a><div class="current-user">' + jade.escape((jade_interp = locals.user.name) == null ? "" : jade_interp) + "</div></li></ul></div></nav>");
        return buf.join("");
    };

    // crm/applications/view.jade compiled template
    templatizer["crm"]["applications"]["view"] = function tmpl_crm_applications_view(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(Date, moment, numeral) {
            buf.push('<div class="admin-site-layout"><div class="admin-nav-column">');
            buf.push(templatizer["crm"]["applications"]["view"]["crm-nav"](locals));
            buf.push('</div><div class="admin-content-column"><div class="crm-applications-view">');
            buf.push(templatizer["crm"]["applications"]["view"]["lead-card"](locals.application));
            buf.push("</div></div></div>");
        }).call(this, "Date" in locals_for_with ? locals_for_with.Date : typeof Date !== "undefined" ? Date : undefined, "moment" in locals_for_with ? locals_for_with.moment : typeof moment !== "undefined" ? moment : undefined, "numeral" in locals_for_with ? locals_for_with.numeral : typeof numeral !== "undefined" ? numeral : undefined);
        return buf.join("");
    };

    // crm/applications/view.jade:lead-card compiled template
    templatizer["crm"]["applications"]["view"]["lead-card"] = function tmpl_crm_applications_view_lead_card(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="lead-card"><div class="admin-splitview"><div class="input-column">');
        buf.push(templatizer["crm"]["applications"]["view"]["application-bids"](application));
        buf.push(templatizer["crm"]["applications"]["view"]["application-form"](application));
        buf.push('</div><div class="action-column">');
        buf.push(templatizer["crm"]["applications"]["view"]["application-comments"](application));
        buf.push("</div></div></div>");
        return buf.join("");
    };


    // crm/applications/view.jade:application-bids compiled template
    templatizer["crm"]["applications"]["view"]["application-bids"] = function tmpl_crm_applications_view_application_bids(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        if (application.auction !== null && application.auction.bids.length > 0) {
            buf.push("<div" + jade.attr("data-application-id", application.id, true, false) + ' class="application-bids"><h3>Ofertas</h3><table class="table striped"><thead><tr><th>Fornecedor</th><th>Valor pré-aprovado</th><th>Parcelas</th><th>Taxa C.E.T</th><th>Prestação</th><th> </th><th></th></tr></thead><tbody>');
            (function() {
                var $obj = application.auction.bids;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var bid = $obj[$index];
                        buf.push("<tr" + jade.cls([ bid.rejected ? "rejected" : bid.accepted ? "accepted" : "" ], [ true ]) + ">      <td>" + jade.escape((jade_interp = bid.supplier.name) == null ? "" : jade_interp) + "                    </td>");
                        if (bid.rejected) {
                            buf.push('<td colspan="4">rejeitado</td><td> <button' + jade.attr("data-bid-id", bid.id, true, false) + ' class="btn warning request-new">pedir uma nova</button></td>');
                        } else {
                            buf.push("<td>" + jade.escape((jade_interp = bid.approvedAmount) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = bid.approvedPeriodMonths) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = bid.totalAnnualInterestRate) == null ? "" : jade_interp) + "%</td><td> " + jade.escape((jade_interp = numeral(bid.monthlyInstallment).format("$ 0,0.00")) == null ? "" : jade_interp) + "</td>");
                            if (bid.accepted) {
                                buf.push("<td>Oferta aceita</td>");
                            } else {
                                buf.push("<td> <button" + jade.attr("data-bid-id", bid.id, true, false) + ' class="small btn warning request-new">Pedir uma nova</button></td><td><button' + jade.attr("data-bid-id", bid.id, true, false) + ' class="small btn primary accept-bid">Aceitar esta oferta</button></td>');
                            }
                        }
                        buf.push("</tr>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var bid = $obj[$index];
                        buf.push("<tr" + jade.cls([ bid.rejected ? "rejected" : bid.accepted ? "accepted" : "" ], [ true ]) + ">      <td>" + jade.escape((jade_interp = bid.supplier.name) == null ? "" : jade_interp) + "                    </td>");
                        if (bid.rejected) {
                            buf.push('<td colspan="4">rejeitado</td><td> <button' + jade.attr("data-bid-id", bid.id, true, false) + ' class="btn warning request-new">pedir uma nova</button></td>');
                        } else {
                            buf.push("<td>" + jade.escape((jade_interp = bid.approvedAmount) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = bid.approvedPeriodMonths) == null ? "" : jade_interp) + "</td><td>" + jade.escape((jade_interp = bid.totalAnnualInterestRate) == null ? "" : jade_interp) + "%</td><td> " + jade.escape((jade_interp = numeral(bid.monthlyInstallment).format("$ 0,0.00")) == null ? "" : jade_interp) + "</td>");
                            if (bid.accepted) {
                                buf.push("<td>Oferta aceita</td>");
                            } else {
                                buf.push("<td> <button" + jade.attr("data-bid-id", bid.id, true, false) + ' class="small btn warning request-new">Pedir uma nova</button></td><td><button' + jade.attr("data-bid-id", bid.id, true, false) + ' class="small btn primary accept-bid">Aceitar esta oferta</button></td>');
                            }
                        }
                        buf.push("</tr>");
                    }
                }
            }).call(this);
            buf.push("</tbody></table></div>");
        }
        return buf.join("");
    };


    // crm/applications/view.jade:application-comments compiled template
    templatizer["crm"]["applications"]["view"]["application-comments"] = function tmpl_crm_applications_view_application_comments(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="application-comments"><form class="comment-form"><input type="hidden" name="applicationId"' + jade.attr("value", application.id, true, false) + '/><h4>Adicione um comentário      </h4><div class="row"><div class="col-12"><textarea name="comment"></textarea></div></div><div class="row"><div class="col-6"><div class="checkbox-container"><input type="checkbox" name="notify"/><label>Notificar o cliente via e-mail</label></div></div><div class="col-6"><button type="submit" class="btn primary">Adicione um comentário    </button></div></div></form><div class="comment-list">  ');
        (function() {
            var $obj = application.comments;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var comment = $obj[$index];
                    buf.push('<div class="comment"><div class="small"><i><span>' + jade.escape((jade_interp = new Date(comment.created).toISOString().slice(0, 10)) == null ? "" : jade_interp) + "</span><span>&nbsp; " + jade.escape((jade_interp = new Date(comment.created).toISOString().slice(11, 16)) == null ? "" : jade_interp) + "</span></i><b>&nbsp;" + jade.escape((jade_interp = comment.userName) == null ? "" : jade_interp) + "</b></div><p>" + jade.escape((jade_interp = comment.comment) == null ? "" : jade_interp) + "</p>");
                    if (comment.notify) {
                        buf.push('<div class="checkbox-container"><input type="checkbox" checked="checked" disabled="disabled"/><labelcliente>notificado por email</labelcliente></div>');
                    }
                    buf.push("</div>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var comment = $obj[$index];
                    buf.push('<div class="comment"><div class="small"><i><span>' + jade.escape((jade_interp = new Date(comment.created).toISOString().slice(0, 10)) == null ? "" : jade_interp) + "</span><span>&nbsp; " + jade.escape((jade_interp = new Date(comment.created).toISOString().slice(11, 16)) == null ? "" : jade_interp) + "</span></i><b>&nbsp;" + jade.escape((jade_interp = comment.userName) == null ? "" : jade_interp) + "</b></div><p>" + jade.escape((jade_interp = comment.comment) == null ? "" : jade_interp) + "</p>");
                    if (comment.notify) {
                        buf.push('<div class="checkbox-container"><input type="checkbox" checked="checked" disabled="disabled"/><labelcliente>notificado por email</labelcliente></div>');
                    }
                    buf.push("</div>");
                }
            }
        }).call(this);
        buf.push("</div></div>");
        return buf.join("");
    };


    // crm/applications/view.jade:application-form compiled template
    templatizer["crm"]["applications"]["view"]["application-form"] = function tmpl_crm_applications_view_application_form(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push(templatizer["crm"]["applications"]["view"]["postpone-modal"](application));
        buf.push(templatizer["crm"]["applications"]["view"]["close-modal"](application));
        buf.push('<form class="form application-form-crm"><input type="hidden" name="id"' + jade.attr("value", application.id, true, false) + '/><input type="hidden" name="revision"' + jade.attr("value", application.revision, true, false) + '/><div class="section"><div class="two-col"><div class="col"><p>Cadastrada em ' + jade.escape((jade_interp = moment(application.created).format("lll")) == null ? "" : jade_interp) + " <br/>atualizada após " + jade.escape((jade_interp = moment(application.updated).from(moment(application.created), true)) == null ? "" : jade_interp) + '</p></div><div class="col"><p>Prioridade de atendimento: ' + jade.escape((jade_interp = numeral(application.salesPriority).format()) == null ? "" : jade_interp) + " </p></div></div></div>");
        buf.push(templatizer["crm"]["applications"]["view"]["contact-details"](application));
        buf.push(templatizer["crm"]["applications"]["view"]["personal-details"](application));
        buf.push(templatizer["crm"]["applications"]["view"]["income-section"](application));
        buf.push(templatizer["crm"]["applications"]["view"]["bank-details-section"](application));
        buf.push(templatizer["crm"]["applications"]["view"]["application-details"](application));
        if (application.securityType == "car") {
            buf.push(templatizer["crm"]["applications"]["view"]["car-security-section"](application));
        }
        buf.push('<div class="section actions"><button class="btn primary save">Gravar Alterações</button>');
        if (application.auction === null) {
            buf.push('<button class="btn primary start-auction"> Iniciar Cotações</button>');
        }
        buf.push('<button class="btn postpone">Adiar Atendimento</button>');
        if (application.applicationState == 32) {
            buf.push('<button class="btn primary follow-up">Acompanhamento completo</button>');
        }
        buf.push('<button class="btn warning trash">Fechar pedido</button></div></form>');
        return buf.join("");
    };


    // crm/applications/view.jade:application-details compiled template
    templatizer["crm"]["applications"]["view"]["application-details"] = function tmpl_crm_applications_view_application_details(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="section"><h3>Detalhes do Pedido</h3><div class="two-col"><div class="col"><div class="input-container"><div class="label-container"><label>Período de empréstimo (meses)</label></div><div class="controls"><input type="number" name="loanPeriodInMonths" data-validate="data-validate" data-validate-min="6,Mínimo 6 meses" data-validate-max="60,Máximo 60 meses"' + jade.attr("value", application.loanPeriodInMonths, true, false) + '/></div></div></div><div class="col"><div class="input-container"><div class="label-container"><label>Valor Solicitado</label></div><div class="controls"><input type="text" name="appliedAmount" data-validate="data-validate" money-input-mask="0" data-validate-maxmoney="600000,Máximo 300.000 reais. Se precisar de mais, entre em contato."' + jade.attr("value", application.appliedAmount, true, false) + '/></div></div></div><div class="col"><div class="input-container"><div class="label-container"><label>Garantia</label></div><div class="controls"><select data-validate="data-validate" data-validate-required="Informe o tipo de garantia oferecido" name="securityType"><option value=""' + jade.attr("selected", application.securityType === "", true, false) + '>Preencher</option><option value="car"' + jade.attr("selected", application.securityType === "car", true, false) + '>Garantia de Veículo</option><option value="no-security"' + jade.attr("selected", application.securityType === "no-security", true, false) + '>Sem Garantia</option></select></div></div></div><div class="col"><div class="input-container"><div class="label-container"><label>Tipo de produto</label></div><div class="controls"><select data-validate="data-validate" data-validate-required="Informe o tipo de produto" name="securityIsOwned"><option value=""' + jade.attr("selected", application.securityIsOwned == null, true, false) + '>Preencher</option><option value="true"' + jade.attr("selected", application.securityIsOwned, true, false) + '>Empréstimo</option><option value="false"' + jade.attr("selected", !application.securityIsOwned, true, false) + ">Financiamento</option></select></div></div></div></div></div>");
        return buf.join("");
    };


    // crm/applications/view.jade:bank-details-section compiled template
    templatizer["crm"]["applications"]["view"]["bank-details-section"] = function tmpl_crm_applications_view_bank_details_section(application, extraInformation) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="section bank-details-section"><h3>Conta Bancária</h3><div class="two-col">           <div class="col">               <div class="label-container"><label>Conta no banco *</label></div><div class="controls">');
        buf.push(templatizer["crm"]["applications"]["view"]["bank-name-editor"]("bankName", application.bankName, "Selecione uma opção na lista"));
        buf.push("</div></div>");
        if (extraInformation) {
            buf.push('<div class="col has-bank-details"><div class="label-container"><label>Agência da conta *</label></div><div class="controls"><input autocomplete="off" type="tel" placeholder="agência" data-validate="data-validate" name="agency" data-input-mask="9999"' + jade.attr("value", application.agency, true, false) + ' data-validate-required="Preencha número da agência onde tem conta"/></div></div><div class="col has-bank-details"><div class="label-container"><label>Número da conta e dígito *</label></div><div class="controls">');
            buf.push(templatizer["crm"]["applications"]["view"]["bank-account-editor"]("accountNumber", application.accountNumber));
            buf.push("</div></div>");
        }
        buf.push('<div class="col has-bank-details"><div class="label-container"><label>Tipo da conta *</label></div><div class="controls">');
        buf.push(templatizer["crm"]["applications"]["view"]["account-type-editor"]("accountType", application.accountType, true));
        buf.push('</div></div><div class="col has-bank-details"><div class="label-container"><label>Quando abriu essa conta? *</label></div><div class="controls">');
        buf.push(templatizer["crm"]["applications"]["view"]["month-editor"]("accountOpenDate", application.accountOpenDate, new Date().getFullYear(), "Informe o mês e ano de abertura"));
        buf.push("</div></div></div>");
        if (application.securityType !== "home") {
            buf.push('<div class="col"><div class="label-container"><label>Tem restrições de crédito?*</label></div><div class="controls">');
            buf.push(templatizer["crm"]["applications"]["view"]["radio-button-editor"]("hasCreditRestrictions", "Selecione uma opção", "false", "Não", application.hasCreditRestrictions === false, "true", "Sim", application.hasCreditRestrictions === true));
            buf.push("</div></div>");
        }
        buf.push("</div>");
        return buf.join("");
    };


    // crm/applications/view.jade:NetWorth compiled template
    templatizer["crm"]["applications"]["view"]["NetWorth"] = function tmpl_crm_applications_view_NetWorth(initialValue, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Necessário";
        var amountPatrimony = [ {
            code: "0",
            name: "Não possuo patrimônio"
        }, {
            code: "10000",
            name: "Até R$ 10 mil"
        }, {
            code: "50000",
            name: "Entre R$ 10 mil e R$ 50 mil"
        }, {
            code: "300000",
            name: "Entre R$ 50 mil e R$ 300 mil"
        }, {
            code: "500000",
            name: "Acima de R$ 300 mil"
        } ];
        buf.push('<div class="bank-network-editor"><select name="netWorth" data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + ">");
        (function() {
            var $obj = amountPatrimony;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var patrimony = $obj[$index];
                    buf.push("<option" + jade.attr("value", patrimony.code, true, false) + jade.attr("selected", initialValue == patrimony.code, true, false) + ">" + jade.escape((jade_interp = patrimony.name) == null ? "" : jade_interp) + "</option>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var patrimony = $obj[$index];
                    buf.push("<option" + jade.attr("value", patrimony.code, true, false) + jade.attr("selected", initialValue == patrimony.code, true, false) + ">" + jade.escape((jade_interp = patrimony.name) == null ? "" : jade_interp) + "</option>");
                }
            }
        }).call(this);
        buf.push("</select></div>");
        return buf.join("");
    };


    // crm/applications/view.jade:IncomePaymentDay compiled template
    templatizer["crm"]["applications"]["view"]["IncomePaymentDay"] = function tmpl_crm_applications_view_IncomePaymentDay(initialValue, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Necessário";
        var days = [ {
            code: "01",
            name: "dia 01"
        }, {
            code: "05",
            name: "dia 05"
        }, {
            code: "10",
            name: "dia 10"
        }, {
            code: "30",
            name: "dia 30"
        } ];
        buf.push('<div class="income-payment-day-editor"><select name="incomePaymentDay" data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + '><option value="">Selecione...</option>');
        (function() {
            var $obj = days;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var day = $obj[$index];
                    buf.push("<option" + jade.attr("value", day.code, true, false) + jade.attr("selected", initialValue == day.code, true, false) + ">" + jade.escape((jade_interp = day.name) == null ? "" : jade_interp) + "</option>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var day = $obj[$index];
                    buf.push("<option" + jade.attr("value", day.code, true, false) + jade.attr("selected", initialValue == day.code, true, false) + ">" + jade.escape((jade_interp = day.name) == null ? "" : jade_interp) + "</option>");
                }
            }
        }).call(this);
        buf.push("</select></div>");
        return buf.join("");
    };


    // crm/applications/view.jade:IncomePaymentMethod compiled template
    templatizer["crm"]["applications"]["view"]["IncomePaymentMethod"] = function tmpl_crm_applications_view_IncomePaymentMethod(initialValue, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Necessário";
        var options = [ {
            code: "cash",
            name: "Dinheiro vivo"
        }, {
            code: "check",
            name: "Cheque da empresa"
        }, {
            code: "direct_deposit",
            name: "Crédito em conta"
        }, {
            code: "debit_card",
            name: "Cartão salário"
        }, {
            code: "other",
            name: "Outros meios"
        } ];
        buf.push('<div class="payment-method-editor"><select name="incomePaymentMethod" data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + '><option value="">Selecione...</option>');
        (function() {
            var $obj = options;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var option = $obj[$index];
                    buf.push("<option" + jade.attr("value", option.code, true, false) + jade.attr("selected", initialValue == option.code, true, false) + ">" + jade.escape((jade_interp = option.name) == null ? "" : jade_interp) + "</option>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var option = $obj[$index];
                    buf.push("<option" + jade.attr("value", option.code, true, false) + jade.attr("selected", initialValue == option.code, true, false) + ">" + jade.escape((jade_interp = option.name) == null ? "" : jade_interp) + "</option>");
                }
            }
        }).call(this);
        buf.push("</select></div>");
        return buf.join("");
    };


    // crm/applications/view.jade:income-proof-document compiled template
    templatizer["crm"]["applications"]["view"]["income-proof-document"] = function tmpl_crm_applications_view_income_proof_document(name, initialValue, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Informe o tipo de comprovante de renda que será utilizado";
        var documents = [ {
            code: "statement",
            description: "Extrato Bancário"
        }, {
            code: "hol",
            description: "Holerite"
        }, {
            code: "previdence",
            description: "Extrato do INSS"
        }, {
            code: "priv-prev",
            description: "Extrato de Previdência Privada"
        }, {
            code: "prolabore",
            description: "Pró-labore"
        }, {
            code: "invoices",
            description: "Notas fiscais da minha empresa"
        } ];
        buf.push('<div class="income-proof-editor"><select' + jade.attr("name", name, true, false) + ' data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + '><option value="">Selecione</option>');
        (function() {
            var $obj = documents;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var doc = $obj[$index];
                    buf.push("<option" + jade.attr("value", doc.code, true, false) + jade.attr("selected", initialValue == doc.code, true, false) + ">" + jade.escape((jade_interp = doc.description) == null ? "" : jade_interp) + "</option>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var doc = $obj[$index];
                    buf.push("<option" + jade.attr("value", doc.code, true, false) + jade.attr("selected", initialValue == doc.code, true, false) + ">" + jade.escape((jade_interp = doc.description) == null ? "" : jade_interp) + "</option>");
                }
            }
        }).call(this);
        buf.push("</select></div>");
        return buf.join("");
    };


    // crm/applications/view.jade:bank-account-editor compiled template
    templatizer["crm"]["applications"]["view"]["bank-account-editor"] = function tmpl_crm_applications_view_bank_account_editor(name, initialValue, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Digite o número da conta e, no outro espaço, o dígito de controle";
        buf.push('<div class="bank-account-editor"><input type="hidden"' + jade.attr("name", name, true, false) + jade.attr("value", initialValue, true, false) + '/><input autocomplete="off" type="tel"' + jade.attr("name", name + "_acc", true, false) + ' data-validate="data-validate" data-input-mask="9999999999"' + jade.attr("data-validate-required", message, true, false) + ' class="accno"/><input autocomplete="off" type="tel" data-validate="data-validate" data-input-mask="SS"' + jade.attr("data-validate-required", message, true, false) + ' class="accdig"/></div>');
        return buf.join("");
    };


    // crm/applications/view.jade:bank-name-editor compiled template
    templatizer["crm"]["applications"]["view"]["bank-name-editor"] = function tmpl_crm_applications_view_bank_name_editor(name, initialValue, message, mandatory) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Necessário";
        var banks = [ {
            code: "001",
            name: "Banco do Brasil"
        }, {
            code: "041",
            name: "Banrisul"
        }, {
            code: "237",
            name: "Bradesco"
        }, {
            code: "070",
            name: "BRB - Banco de Brasília"
        }, {
            code: "104",
            name: "Caixa Economica Federal"
        }, {
            code: "745",
            name: "Citibank"
        }, {
            code: "021",
            name: "Banestes"
        }, {
            code: "037",
            name: "Banco do Estado do Pará"
        }, {
            code: "047",
            name: "Banco do Estado de Sergipe"
        }, {
            code: "077",
            name: "Banco Intermedium"
        }, {
            code: "208",
            name: "Banco BTG Pactual"
        }, {
            code: "341",
            name: "Itaú"
        }, {
            code: "243",
            name: "Banco Máxima"
        }, {
            code: "212",
            name: "Banco Original"
        }, {
            code: "254",
            name: "Paraná Banco"
        }, {
            code: "422",
            name: "Banco Safra"
        }, {
            code: "033",
            name: "Santander"
        }, {
            code: "748",
            name: "Sicredi"
        }, {
            code: "637",
            name: "Sofisa"
        } ];
        buf.push('<div class="bank-name-editor"><select' + jade.attr("name", name, true, false) + ' data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + '><option value="">Selecione...</option>');
        if (!mandatory) {
            buf.push('<option value="no">Não tenho conta em Banco</option>');
        }
        (function() {
            var $obj = banks;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var bank = $obj[$index];
                    buf.push("<option" + jade.attr("value", bank.code, true, false) + jade.attr("selected", initialValue == bank.code, true, false) + ">" + jade.escape((jade_interp = bank.name) == null ? "" : jade_interp) + "</option>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var bank = $obj[$index];
                    buf.push("<option" + jade.attr("value", bank.code, true, false) + jade.attr("selected", initialValue == bank.code, true, false) + ">" + jade.escape((jade_interp = bank.name) == null ? "" : jade_interp) + "</option>");
                }
            }
        }).call(this);
        buf.push("</select></div>");
        return buf.join("");
    };


    // crm/applications/view.jade:account-type-editor compiled template
    templatizer["crm"]["applications"]["view"]["account-type-editor"] = function tmpl_crm_applications_view_account_type_editor(name, initialValue, required, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = required ? message || "Necessário" : undefined;
        var documents = [];
        buf.push('<div class="account-type-editor"><input type="hidden" id="init_val"' + jade.attr("value", initialValue, true, false) + "/><select" + jade.attr("name", name, true, false) + ' data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + ">");
        if (required) {
            buf.push('<option value="">Selecione...</option>');
        } else {
            buf.push('<option value="">Sem conta bancária</option>');
        }
        buf.push("</select></div>");
        return buf.join("");
    };


    // crm/applications/view.jade:state-editor compiled template
    templatizer["crm"]["applications"]["view"]["state-editor"] = function tmpl_crm_applications_view_state_editor(name, initialValue, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Necessário";
        var states = [ "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO" ];
        buf.push("<select" + jade.attr("name", name, true, false) + ' data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + '><option value="">Selecionar</option>');
        (function() {
            var $obj = states;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var state = $obj[$index];
                    buf.push("<option" + jade.attr("value", state, true, false) + jade.attr("selected", initialValue == state, true, false) + ">" + jade.escape((jade_interp = state) == null ? "" : jade_interp) + "</option>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var state = $obj[$index];
                    buf.push("<option" + jade.attr("value", state, true, false) + jade.attr("selected", initialValue == state, true, false) + ">" + jade.escape((jade_interp = state) == null ? "" : jade_interp) + "</option>");
                }
            }
        }).call(this);
        buf.push("</select>");
        return buf.join("");
    };


    // crm/applications/view.jade:job-position-editor compiled template
    templatizer["crm"]["applications"]["view"]["job-position-editor"] = function tmpl_crm_applications_view_job_position_editor(name, initialValue, worksStatus, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Selecione um cargo ou profissão";
        var documents = [];
        buf.push('<div class="job-position-editor"><input type="hidden" id="init_val"' + jade.attr("value", initialValue, true, false) + '/><input type="hidden" id="filter"' + jade.attr("value", worksStatus, true, false) + "/><select" + jade.attr("name", name, true, false) + ' data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + '><option value="">Selecionar</option></select></div>');
        return buf.join("");
    };


    // crm/applications/view.jade:personal-details compiled template
    templatizer["crm"]["applications"]["view"]["personal-details"] = function tmpl_crm_applications_view_personal_details(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="section"><h3>Detalhes pessoais</h3><div class="two-col"><div class="col"><div class="input-container"><div class="label-container"><label>CPF</label></div><div class="controls"><input autocomplete="off" type="tel" name="personalNumber" data-validate="data-validate" data-validate-required="Informe o CPF" data-validate-cpf="Número do CPF inválido"' + jade.attr("value", application.personalNumber, true, false) + '/></div></div></div><div class="col"><div class="label-container"><label>RG</label></div><div class="controls"><input autocomplete="off" type="tel" name="RG" placeholder=""' + jade.attr("value", application.RG, true, false) + ' data-validate="data-validate" data-validate-required="Informe o RG"/></div></div><div class="col"><div class="label-container"><label>Data de nascimento</label></div><div class="controls">');
        buf.push(templatizer["crm"]["applications"]["view"]["date-editor"]("birthDate", application.birthDate, new Date().getFullYear() - 18, "Informe a Data de Nascimento"));
        buf.push('</div></div><div class="col"><div class="label-container"><label>Local de nascimento</label></div><div class="controls"><input type="text" name="placeOfBirth" placeholder="Cidade de nascimento" data-validate="data-validate" data-validate-required="Informe o nome da cidade onde nasceu"' + jade.attr("value", application.placeOfBirth, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Nacionalidade</label></div><div class="controls"><input type="text" name="nationality" placeholder=""' + jade.attr("value", application.nationality, true, false) + '/></div></div><div class="col">                               </div><div class="col"><div class="input-container"><div class="label-container"><label>Status de relacionamento</label></div><div class="controls"><select name="civilStatus" data-validate="data-validate" data-validate-required="Entre o estado civil"><option value="">Não preenchido</option><option value="single"' + jade.attr("selected", application.civilStatus == "single", true, false) + '>Solteiro(a) </option><option value="married"' + jade.attr("selected", application.civilStatus == "married", true, false) + '>Casado(a) </option><option value="divorced"' + jade.attr("selected", application.civilStatus == "divorced", true, false) + '>Divorciado(a)</option><option value="widowed"' + jade.attr("selected", application.civilStatus == "widowed", true, false) + '>Viúvo(a)</option></select></div></div></div><div class="col"><div class="input-container"><div class="label-container"><label>Ocupação</label></div><div class="controls"><select name="workStatus"><option value="">Ocupação não preenchida</option><option value="public-employee"' + jade.attr("selected", application.workStatus == "public-employee", true, false) + '>Funcionário Privado</option><option value="private-employee"' + jade.attr("selected", application.workStatus == "private-employee", true, false) + '>Funcionário Público</option><option value="independent-contractor"' + jade.attr("selected", application.workStatus == "independent-contractor", true, false) + '>Autônomo</option><option value="business-owner"' + jade.attr("selected", application.workStatus == "business-owner", true, false) + '>Empresário</option><option value="liberal-professional"' + jade.attr("selected", application.workStatus == "liberal-professional", true, false) + '>Profissional Liberal</option><option value="retired"' + jade.attr("selected", application.workStatus == "retired", true, false) + '>Aposentado ou Pensionista</option><option value="unemployed"' + jade.attr("selected", application.workStatus == "unemployed", true, false) + '>Desempregado</option></select></div></div></div><div class="col"><div class="label-container"><label>Nome da mãe</label></div><div class="controls"><input type="text" name="mothersName" placeholder="Nome da mãe" data-validate="data-validate" data-validate-required="Informe o nome da sua mãe"' + jade.attr("value", application.mothersName, true, false) + "/></div></div></div></div>");
        return buf.join("");
    };


    // crm/applications/view.jade:contact-details compiled template
    templatizer["crm"]["applications"]["view"]["contact-details"] = function tmpl_crm_applications_view_contact_details(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="section"><h3>Detalhes do contato</h3><div class="two-col"><div class="col"><div class="input-container"><div class="label-container"><label>Nome</label></div><div class="controls"><input type="text" name="firstName" data-validate="data-validate" data-validate-required="Informe o nome"' + jade.attr("value", application.firstName, true, false) + '/></div></div></div><div class="col"><div class="input-container"><div class="label-container"><label>Sobrenome</label></div><div class="controls"><input type="text" name="lastName" data-validate="data-validate" data-validate-required="Informe o sobrenome"' + jade.attr("value", application.lastName, true, false) + '/></div></div></div><div class="col"><div class="input-container"><div class="label-container"><label>Número do Celular</label></div><div class="controls"><input autocomplete="off" type="tel" name="telephoneNumber" data-input-mask="(99) 99999 9999" data-validate="data-validate" data-validate-required="Informe um número de celular" data-validate-telephone="Informe um número de telefone válido"' + jade.attr("value", application.telephoneNumber, true, false) + '/></div></div></div><div class="col"><div class="input-container"><div class="label-container"><label>Email</label></div><div class="controls"><input type="email" name="email" data-validate="data-validate" data-validate-required="Email é obrigatório" data-validate-email="Entre um endereço de email válido"' + jade.attr("value", application.email, true, false) + '/></div></div></div><div class="col"><div class="input-container"><div class="label-container"><label>Telefone fixo</label></div><div class="controls"><input autocomplete="off" type="tel" name="homePhoneNumber" data-input-mask="(99) 9999 9999" data-validate="data-validate" data-validate-required="Informe um telefone fixo"' + jade.attr("value", application.homePhoneNumber, true, false) + '/></div></div></div><div class="col"><div class="input-container"><div class="label-container"><label>Tipo de residência*</label></div><div class="controls"><select name="housing" data-validate="data-validate" data-validate-required="Selecione uma opção"><option value="">Selecione</option><option value="owned"' + jade.attr("selected", application.housing == "owned", true, false) + '>Própria</option><option value="rented"' + jade.attr("selected", application.housing == "rented", true, false) + '>Alugada</option></select></div></div></div><div class="col"><div class="label-container"><label>CEP</label></div><div class="controls"><input autocomplete="off" type="tel" name="zipCode"' + jade.attr("value", application.zipCode, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Endereço</label></div><div class="controls"><input type="text" name="address1"' + jade.attr("value", application.address1, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Número</label></div><div class="controls"><input autocomplete="off" type="tel" name="streetNumber"' + jade.attr("value", application.streetNumber, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Complemento</label></div><div class="controls"><input type="text" name="address2"' + jade.attr("value", application.address2, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Cidade</label></div><div class="controls"><input type="text" name="city"' + jade.attr("value", application.city, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Estado</label></div><div class="controls"><input type="text" name="state"' + jade.attr("value", application.state, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Bairro</label></div><div class="controls"><input type="text" name="neighbourhood"' + jade.attr("value", application.neighbourhood, true, false) + "/></div></div></div></div>");
        return buf.join("");
    };


    // crm/applications/view.jade:income-section compiled template
    templatizer["crm"]["applications"]["view"]["income-section"] = function tmpl_crm_applications_view_income_section(application, extraInformation) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="section income-section"><h3>Informações sobre a sua renda</h3><div class="two-col">');
        if (application.securityType !== "home") {
            buf.push('<div class="col"><div class="label-container"><label>Renda mensal*</label></div><div class="controls"><input autocomplete="off" type="tel" placeholder="Renda média mensal em R$"' + jade.attr("value", application.monthlyIncome === 0 ? "" : application.monthlyIncome, true, false) + ' name="monthlyIncome" data-validate-min="1000,Informe a renda média mensal da família - mínimo 1.000" data-validate-max="100000,Informe a rendamédia mensal da família - até 100.000" title="Informe a sua renda média mensal" money-input-mask="0" data-validate="data-validate" data-validate-required="Informe a sua renda média (mensal)"/></div></div>');
        } else {
            buf.push('<div class="col"><div class="label-container"><label>Renda familiar mensal (total)*</label></div><div class="controls disable-simulated"><input autocomplete="off" type="tel" placeholder="Renda familiar  média mensal em R$"' + jade.attr("value", application.householdMonthlyIncome === 0 ? "" : application.householdMonthlyIncome, true, false) + ' name="householdMonthlyIncome" title="Informe a renda média mensal da sua família" data-validate-min="1000,Informe a renda média mensal da família - mínimo 1.000" data-validate-max="100000,Informe a rendamédia mensal da família - até 100.000" money-input-mask="0" data-validate="data-validate" data-validate-required="Informe a renda média (mensal) da família"/></div></div>');
        }
        buf.push('<div class="col"><div class="label-container"><label>Tipo de comprovante de renda*</label></div><div class="controls">');
        buf.push(templatizer["crm"]["applications"]["view"]["income-proof-document"]("incomeProofDocument", application.incomeProofDocument));
        buf.push("</div></div>");
        if (application.workStatus != "unemployed" && application.workStatus != "retired" && application.workStatus != "independent-contractor") {
            buf.push('<div class="col"><div class="label-container"><label>Empregador ou fonte de renda*</label></div><div class="controlseu"> <input type="text"' + jade.attr("value", application.companyName, true, false) + ' name="companyName" data-validate="data-validate" data-validate-required="Informe o nome da empresa ou instituição"/></div></div><div class="col"><div class="label-container"><label>Cargo ou profissão*</label></div><div class="controls">');
            buf.push(templatizer["crm"]["applications"]["view"]["job-position-editor"]("jobPosition", application.jobPosition, application.workStatus));
            buf.push('</div></div><div class="col"><div class="label-container"><label>Trabalha na empresa desde*</label></div><div class="controls">');
            buf.push(templatizer["crm"]["applications"]["view"]["date-editor"]("employmentDate", application.employmentDate, new Date().getFullYear(), "Informe a data de início"));
            buf.push('</div></div><div class="col"><div class="label-container"><label>CNPJ da empresa</label></div><div class="controls">');
            if (application.workStatus == "business-owner") {
                buf.push('<input autocomplete="off" type="tel" placeholder="Obrigatório para empresários" title="Preenchimento obrigatório para empresários"' + jade.attr("value", application.companyRegistrationNumber, true, false) + ' name="companyRegistrationNumber" data-input-mask="SS.SSS.SSS/SSSS-SS" data-validate="data-validate" data-validate-required="Informe o CNPJ da sua empresa"/>');
            } else {
                buf.push('<input type="text" placeholder="Obrigatório para empresários" title="Preenchimento obrigatório para empresários"' + jade.attr("value", application.companyRegistrationNumber, true, false) + ' name="companyRegistrationNumber" data-input-mask="SS.SSS.SSS/SSSS-SS"/>');
            }
            buf.push("</div></div>");
            buf.push(templatizer["crm"]["applications"]["view"]["employer-address"](application));
            buf.push('<div class="col"><div class="label-container"><label>Como recebe seu salário?*</label></div><div class="controls">');
            buf.push(templatizer["crm"]["applications"]["view"]["IncomePaymentMethod"](application.incomePaymentMethod, "Selecione uma opção..."));
            buf.push('</div></div><div class="col"><div class="label-container"><label>Quando recebe seu salário?*</label></div><div class="controls">');
            buf.push(templatizer["crm"]["applications"]["view"]["IncomePaymentDay"](application.incomePaymentDay, "Selecione uma opção..."));
            buf.push('</div></div><div class="col"><div class="label-container"><label>Qual o valor aproximado do seu patrimônio?*</label></div><div class="controls">');
            buf.push(templatizer["crm"]["applications"]["view"]["NetWorth"].call({
                block: function(buf) {
                    buf.push("    ");
                }
            }, application.netWorth, "Selecione uma opção..."));
            buf.push("</div></div>");
        }
        buf.push("</div></div>");
        return buf.join("");
    };


    // crm/applications/view.jade:employer-address compiled template
    templatizer["crm"]["applications"]["view"]["employer-address"] = function tmpl_crm_applications_view_employer_address(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="col"><div class="label-container"><label>Telefone da empresa*</label></div><div class="controls"><input autocomplete="off" name="companyPhone" type="tel" placeholder="Telefone da empresa" data-validate="data-validate" data-input-mask="(99) 9999 9999" data-validate-required="Infornme o telefone da empresa"' + jade.attr("value", application.companyPhone, true, false) + '/></div></div><div class="col"><div class="label-container"><label>CEP da empresa*</label></div><div class="controls"><input autocomplete="off" type="tel" name="companyZipCode" placeholder="00000-000" data-validate="data-validate" data-input-mask="99999-999" data-validate-required="Preencha um CEP válido"' + jade.attr("value", application.companyZipCode, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Endereço da Empresa(logradouro)*</label></div><div class="controls"><input type="text" name="companyAddress" placeholder="Rua, Av, Praça, etc." data-validate="data-validate" data-validate-required="Informe o nome da rua, av, praça, etc."' + jade.attr("value", application.companyAddress, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Número*</label></div><div class="controls"><input autocomplete="off" type="tel" name="companyStreetNumber" placeholder="Número do endereço" data-validate="data-validate" data-validate-required="Número do endereço"' + jade.attr("value", application.companyStreetNumber, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Complemento do Endereço</label></div><div class="controls"><input type="text" name="companyAddressComplement" placeholder="Bloco, apartamento, etc."' + jade.attr("value", application.companyAddressComplement, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Bairro*</label></div><div class="controls"><input type="text" name="companyNeighbourhood" placeholder="Nome do bairro ou distrito" data-validate="data-validate" data-validate-required="Informe o seu bairro"' + jade.attr("value", application.companyNeighbourhood, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Cidade*</label></div><div class="controls"><input type="text" name="companyCity" data-validate="data-validate" data-validate-required="Informe o nome da cidade"' + jade.attr("value", application.companyCity, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Estado*</label></div><div class="controls">');
        buf.push(templatizer["crm"]["applications"]["view"]["state-editor"]("companyState", application.companyState));
        buf.push("</div></div>");
        return buf.join("");
    };


    // crm/applications/view.jade:car-security-section compiled template
    templatizer["crm"]["applications"]["view"]["car-security-section"] = function tmpl_crm_applications_view_car_security_section(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="section car-security-section"><h3 class="hide-simulating">Dados do veículo</h3><div class="two-col"><div class="col hide-simulating"><div class="label-container"><label>Placa' + jade.escape((jade_interp = application.securityIsOwned ? "*" : "") == null ? "" : jade_interp) + '</label></div><div class="controls"><input type="text" name="vehicleSecurity.registrationNumber" placeholder="Placa no formato XXX-9999" data-validate="data-validate" data-input-mask="AAA-9999"' + jade.attr("data-validate-required", application.securityIsOwned ? "Informe a placa do veículo, com três letras e 4 dígitos" : null, true, false) + jade.attr("value", application.vehicleSecurity.registrationNumber, true, false) + '/></div></div><div class="col hide-simulating"><div class="label-container"><label>Valor do veículo</label></div><div class="controls"><input type="text"' + jade.attr("value", application.vehicleSecurity.value === 0 ? "" : application.vehicleSecurity.value, true, false) + ' name="vehicleSecurity.value" title="Informe o valor de mercado (tabela) do veículo" money-input-mask="0" data-validate="data-validate" data-validate-required="Informe o valor de mercado (tabela) do veículo"/></div></div>');
        if (!application.securityIsOwned) {
            buf.push('<div class="col"><div class="label-container"><label>Valor de entrada:</label></div><div class="controls"><input type="text"' + jade.attr("value", application.vehicleSecurity.downPayment === 0 ? "" : application.vehicleSecurity.downPayment, true, false) + ' name="vehicleSecurity.downPayment" title="Informe o valor da entrada" money-input-mask="0" data-validate="data-validate" data-validate-required="Informe o valor da entrada que você vai pagar"/></div></div>');
        }
        buf.push('<div class="col hide-simulating"><div class="label-container"><label>Marca do veículo*</label></div><div class="controls"><input type="text" name="vehicleSecurity.brand" placeholder="" data-validate="data-validate" data-validate-required="Necessário"' + jade.attr("value", application.vehicleSecurity.brand, true, false) + '/></div></div><div class="col hide-simulating"><div class="label-container"><label>Modelo*</label></div><div class="controls"><input type="text" name="vehicleSecurity.model" placeholder="" data-validate="data-validate" data-validate-required="Necessário"' + jade.attr("value", application.vehicleSecurity.model, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Ano (modelo) do veículo*</label></div><div class="controls">');
        buf.push(templatizer["crm"]["applications"]["view"]["year-editor"]("vehicleSecurity.modelYear", application.vehicleSecurity.modelYear, 1, 99, true));
        buf.push('</div></div><div class="col"><div class="label-container"><label>Tipo de veículo*</label></div><div class="controls"><label class="radio radio-fixed inline"><input id="security-subtype-car" type="radio" name="securitySubtype" value="car"' + jade.attr("checked", application.securitySubtype === "car", true, false) + ' disabled="disabled" data-validate="data-validate" data-validate-required="Escolha uma das opções"/><span class="security-subtype-car">Carro</span></label><label class="radio radio-fixed inline"><input id="security-subtype-truck" type="radio" name="securitySubtype" disabled="disabled"' + jade.attr("checked", application.securitySubtype === "truck", true, false) + ' value="truck"/><span class="security-subtype-truck">Caminhão</span></label></div></div><div class="col hide-simulating">');
        if (!application.securityIsOwned) {
            buf.push('<div class="label-container"><label>Cor*</label></div><div class="controls"><input type="text" name="vehicleSecurity.color" placeholder="" data-validate="data-validate" data-validate-required="Informe a cor do veículo"' + jade.attr("value", application.vehicleSecurity.color, true, false) + "/></div>");
        }
        buf.push("</div></div></div>");
        return buf.join("");
    };


    // crm/applications/view.jade:radio-button-editor compiled template
    templatizer["crm"]["applications"]["view"]["radio-button-editor"] = function tmpl_crm_applications_view_radio_button_editor(name, validadeMessage, value_first, text_first, checked_first, value_second, text_second, checked_second) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="input-container"><label class="radio inline"><input' + jade.attr("id", name + "-false", true, false) + ' type="radio"' + jade.attr("name", name, true, false) + jade.attr("value", value_first, true, false) + ' data-validate="data-validate"' + jade.attr("data-validate-required", validadeMessage, true, false) + jade.attr("checked", checked_first, true, false) + "/><span>" + jade.escape((jade_interp = text_first) == null ? "" : jade_interp) + '</span></label><label class="radio inline"><input' + jade.attr("id", name + "-true", true, false) + ' type="radio"' + jade.attr("name", name, true, false) + jade.attr("value", value_second, true, false) + jade.attr("checked", checked_second, true, false) + "/><span>" + jade.escape((jade_interp = text_second) == null ? "" : jade_interp) + "</span></label></div>");
        return buf.join("");
    };


    // crm/applications/view.jade:month-editor compiled template
    templatizer["crm"]["applications"]["view"]["month-editor"] = function tmpl_crm_applications_view_month_editor(name, value, initialYear, validadeMessage) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.attr("data-initial-year", initialYear || new Date().getFullYear(), true, false) + ' class="month-editor"><input type="hidden"' + jade.attr("name", name, true, false) + jade.attr("value", value, true, false) + '/><select data-validate="data-validate"' + jade.attr("data-validate-required", validadeMessage, true, false) + ' class="month"></select><select data-validate="data-validate"' + jade.attr("data-validate-required", validadeMessage, true, false) + ' class="year"></select></div>');
        return buf.join("");
    };


    // crm/applications/view.jade:date-editor compiled template
    templatizer["crm"]["applications"]["view"]["date-editor"] = function tmpl_crm_applications_view_date_editor(name, value, initialYear, validadeMessage) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.attr("data-initial-year", initialYear || new Date().getFullYear(), true, false) + ' class="date-editor"><input type="hidden"' + jade.attr("name", name, true, false) + jade.attr("value", value, true, false) + '/><select data-validate="data-validate"' + jade.attr("data-validate-required", validadeMessage, true, false) + ' class="day"></select><select data-validate="data-validate"' + jade.attr("data-validate-required", validadeMessage, true, false) + ' class="month"></select><select data-validate="data-validate"' + jade.attr("data-validate-required", validadeMessage, true, false) + ' class="year"></select></div>');
        return buf.join("");
    };


    // crm/applications/view.jade:year-editor compiled template
    templatizer["crm"]["applications"]["view"]["year-editor"] = function tmpl_crm_applications_view_year_editor(name, value, futureyears, pastyears, disabled) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="year-editor">');
        var year = new Date().getFullYear();
        futureyears = futureyears | 0;
        var inityear = pastyears ? year - pastyears : 1901;
        year = year + futureyears;
        buf.push("<select" + jade.attr("name", name, true, false) + ' data-validate="data-validate" data-validate-required="Necessário"' + jade.attr("disabled", disabled, true, false) + '><option value="">Selecionar ano</option>');
        while (year >= inityear) {
            buf.push("<option" + jade.attr("value", year, true, false) + jade.attr("selected", year == value, true, false) + ">" + jade.escape((jade_interp = year) == null ? "" : jade_interp) + "</option>");
            year--;
        }
        buf.push("</select></div>");
        return buf.join("");
    };


    // crm/applications/view.jade:close-modal compiled template
    templatizer["crm"]["applications"]["view"]["close-modal"] = function tmpl_crm_applications_view_close_modal(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div id="close-modal" class="modal"><div class="close-application"><input type="hidden" name="revision"' + jade.attr("value", application.revision, true, false) + '/><input type="hidden" name="id"' + jade.attr("value", application.id, true, false) + '/><div class="modal-header"><h3>Fechar esse pedido</h3></div><div class="modal-body"><label>Descreva o Motivo</label><textarea name="reason"></textarea></div><div class="modal-footer"><button class="btn warning">Fechar o Pedido</button><button data-modal-close="data-modal-close" class="btn">Cancelar</button></div></div></div>');
        return buf.join("");
    };


    // crm/applications/view.jade:postpone-modal compiled template
    templatizer["crm"]["applications"]["view"]["postpone-modal"] = function tmpl_crm_applications_view_postpone_modal(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div id="postpone-modal" class="modal"><div class="postpone-application"><input type="hidden" name="revision"' + jade.attr("value", application.revision, true, false) + '/><input type="hidden" name="id"' + jade.attr("value", application.id, true, false) + '/><div class="modal-header"><h3>Calendário call-back</h3></div><div class="modal-body"><label>Escolha tempo</label><select name="minutes">');
        (function() {
            var $obj = [ 1, 2, 3, 4, 5 ];
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var hour = $obj[$index];
                    buf.push("<option" + jade.attr("value", hour * 60, true, false) + ">" + jade.escape((jade_interp = hour) == null ? "" : jade_interp) + " horas</option>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var hour = $obj[$index];
                    buf.push("<option" + jade.attr("value", hour * 60, true, false) + ">" + jade.escape((jade_interp = hour) == null ? "" : jade_interp) + " horas</option>");
                }
            }
        }).call(this);
        (function() {
            var $obj = [ 1, 2, 3, 4, 5 ];
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var day = $obj[$index];
                    buf.push("<option" + jade.attr("value", day * 60 * 24, true, false) + ">" + jade.escape((jade_interp = day) == null ? "" : jade_interp) + " dias</option>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var day = $obj[$index];
                    buf.push("<option" + jade.attr("value", day * 60 * 24, true, false) + ">" + jade.escape((jade_interp = day) == null ? "" : jade_interp) + " dias</option>");
                }
            }
        }).call(this);
        buf.push('</select></div><div class="modal-footer"><button class="btn primary">Adiar</button><button data-modal-close="data-modal-close" class="btn">Cancelar</button></div></div></div>');
        return buf.join("");
    };


    // crm/applications/view.jade:crm-nav compiled template
    templatizer["crm"]["applications"]["view"]["crm-nav"] = function tmpl_crm_applications_view_crm_nav(locals) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="side-nav crm-nav"><div class="side-nav-header"><a href="/crm">FinanZero</a></div><div class="side-nav-list"><ul><li><a href="/crm">Próximo cliente</a></li>');
        if (locals.isAdvisor) {
            buf.push('<li><a href="/crm/applications">Meus clientes anteriores</a></li>');
        }
        buf.push('<li><a href="/logout">Sair</a><div class="current-user">' + jade.escape((jade_interp = locals.user.name) == null ? "" : jade_interp) + "</div></li></ul></div></nav>");
        return buf.join("");
    };

    // crm/customer/index.jade compiled template
    templatizer["crm"]["customer"]["index"] = function tmpl_crm_customer_index(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        buf.push('<div class="admin-site-layout"><div class="admin-nav-column">');
        buf.push(templatizer["crm"]["customer"]["index"]["crm-nav"](locals));
        buf.push('</div><div class="admin-content-column"><div class="page-header"><div class="left"><h2>Encontrar um cliente</h2></div><div class="right"></div></div><div class="crm-applications-index"><mixin>(locals, locals.applications)</mixin></div></div></div>');
        return buf.join("");
    };

    // crm/customer/index.jade:crm-nav compiled template
    templatizer["crm"]["customer"]["index"]["crm-nav"] = function tmpl_crm_customer_index_crm_nav(locals) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="side-nav crm-nav"><div class="side-nav-header"><a href="/crm">FinanZero</a></div><div class="side-nav-list"><ul><li><a href="/crm">Próximo cliente</a></li>');
        if (locals.isAdvisor) {
            buf.push('<li><a href="/crm/applications">Meus clientes anteriores</a></li>');
        }
        buf.push('<li><a href="/logout">Sair</a><div class="current-user">' + jade.escape((jade_interp = locals.user.name) == null ? "" : jade_interp) + "</div></li></ul></div></nav>");
        return buf.join("");
    };

    // crm/index.jade compiled template
    templatizer["crm"]["index"] = function tmpl_crm_index(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        buf.push('<div class="admin-site-layout"><div class="admin-nav-column">');
        buf.push(templatizer["crm"]["index"]["crm-nav"](locals));
        buf.push('</div><div class="admin-content-column"><div class="crm-index">');
        buf.push(templatizer["crm"]["index"]["crm-card-flow"](locals));
        buf.push("</div></div></div>");
        return buf.join("");
    };

    // crm/index.jade:crm-card-flow compiled template
    templatizer["crm"]["index"]["crm-card-flow"] = function tmpl_crm_index_crm_card_flow(locals) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.attr("data-is-advisor", locals.isAdvisor, true, false) + ' class="crm-card-flow"><div class="next-lead-container"><h3>Começar a trabalhar no próximo cliente</h3><button class="btn primary next-lead">Obter um cliente</button></div><div class="no-leads hide"><div class="alert info">Não há mais clientes, por favor, aguarde um pouco e tente novamente</div></div><div class="card-container hide"></div></div>');
        return buf.join("");
    };


    // crm/index.jade:crm-nav compiled template
    templatizer["crm"]["index"]["crm-nav"] = function tmpl_crm_index_crm_nav(locals) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="side-nav crm-nav"><div class="side-nav-header"><a href="/crm">FinanZero</a></div><div class="side-nav-list"><ul><li><a href="/crm">Próximo cliente</a></li>');
        if (locals.isAdvisor) {
            buf.push('<li><a href="/crm/applications">Meus clientes anteriores</a></li>');
        }
        buf.push('<li><a href="/logout">Sair</a><div class="current-user">' + jade.escape((jade_interp = locals.user.name) == null ? "" : jade_interp) + "</div></li></ul></div></nav>");
        return buf.join("");
    };

    // home/error404.jade compiled template
    templatizer["home"]["error404"] = function tmpl_home_error404() {
        return '<div class="outer-container"><h1 class="hero">404</h1><p>A página que você está procurando existe</p><a href="/" class="btn primary">Voltar ao início</a></div>';
    };

    // home/notimplemented.jade compiled template
    templatizer["home"]["notimplemented"] = function tmpl_home_notimplemented() {
        return '<div class="outer-container"><h1 class="hero">Não implementado</h1><a href="/" class="btn primary">Voltar ao início</a></div>';
    };

    // login/index.jade compiled template
    templatizer["login"]["index"] = function tmpl_login_index(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        buf.push('<div class="blank-site-layout">');
        buf.push(templatizer["login"]["index"]["main-nav"]());
        buf.push('<div class="content-container"><div class="login-page">');
        buf.push(templatizer["login"]["index"]["login-with-code"]());
        buf.push('</div><div class="login-footer-wrapper"><div class="login-footer-content">');
        buf.push(templatizer["login"]["index"]["faq_customers"]());
        buf.push("</div></div></div></div>");
        return buf.join("");
    };

    // login/index.jade:faq_customers compiled template
    templatizer["login"]["index"]["faq_customers"] = function tmpl_login_index_faq_customers() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="faq_customers"><h2>Perguntas mais frequentes</h2><ul><li><h4>Preciso pagar pelos serviços da FinanZero?</h4><p>Não, nossos serviços são 100% gratuitos. <strong> Portanto ATENÇÃO: NÃO faça nenhum depósito ou pagamento </strong> referente a fiador, seguro, análise ou liberação do empréstimo.</p><p>Você só vai pagar seu empréstimo ou financiamento, diretamente para o banco ou financeira, <strong> após receber o dinheiro em sua conta.</strong></p></li><li><h4>Estou negativado, tenho alguma opção de empréstimo?</h4><a href="http://bit.ly/SimplicFAQ"><strong> Sim! Peça aqui.</strong></a><p>Nós temos uma parceira que pode ajudar você. A Simplic tem empréstimo de até R$ 3.500 com contratação online e sem filas.</p><p>O parcelamento pode ser em até 12 vezes e o dinheiro é disponibilizado na conta em até 48h após a aprovação.</p></li><li><h4>Fiz o cadastro, mas ainda não obtive resposta.</h4><p>Após o seu cadastro você pode acompanhar o status do seu pedido acessando o site da FinanZero.</p></li><li><i>Caso ainda tenha dúvidas, você pode nos contatar pelo telefone 0800 607-3001 ou pelo e-mail atendimento@finanzero.com.br</i></li></ul></div>');
        return buf.join("");
    };


    // login/index.jade:login-with-code compiled template
    templatizer["login"]["index"]["login-with-code"] = function tmpl_login_index_login_with_code() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<form class="login-with-code"><h2>Entrar</h2><div class="alert not-found error hide"><p>Nenhum usuário encontrado com esse email</p></div><div class="alert generic error hide"><p>Estamos com dificuldades técnicas. Por favor tente novamente dentro de alguns minutos</p></div><div class="email-section"><div class="email-input"><div class="label-container"><label>E-mail</label></div><div class="controls"><input type="email" name="email" placeholder="Escreva o email informado no cadastro da proposta"/></div></div><div class="cta-container"><button type="submit" class="btn btn-large primary">Solicitar uma senha</button></div></div><div class="code-section hide"><div class="alert info"><span>Enviamos uma senha numérica para o seu celular e email cadastrados. Por favor digite esta senha no campo abaixo.</span></div><div class="code-input"><div class="label-container"><label>Código</label></div><div class="controls"><input type="text" name="code" placeholder="Digite o código numérico recebido no seu celular"/></div></div><div class="cta-container"><button type="submit" class="btn btn-large primary">Entrar</button></div></div></form>');
        return buf.join("");
    };


    // login/index.jade:main-nav compiled template
    templatizer["login"]["index"]["main-nav"] = function tmpl_login_index_main_nav() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="top-nav main-nav"><div class="top-nav-left"><div class="top-nav-logo"><a href="/"><div class="logo-image-container"><img src="/images/logo.png"/></div></a></div></div><div class="top-nav-center"><div class="top-nav-contact"><div class="top-nav-contact-header"></div></div></div><div class="top-nav-right"><ul><li class="login-link"><a href="/login"><i class="fa fa-lock"></i>Já fiz meu pedido</a></li></ul></div></nav>');
        return buf.join("");
    };

    // login/password.jade compiled template
    templatizer["login"]["password"] = function tmpl_login_password(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        buf.push('<div class="blank-site-layout">');
        buf.push(templatizer["login"]["password"]["main-nav"]());
        buf.push('<div class="content-container"><div class="login-page">');
        buf.push(templatizer["login"]["password"]["login-with-password"]());
        buf.push("</div></div></div>");
        return buf.join("");
    };

    // login/password.jade:login-with-password compiled template
    templatizer["login"]["password"]["login-with-password"] = function tmpl_login_password_login_with_password() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<form class="login-with-password"><h2>Entrar</h2><div class="alert not-found error hide"><p>O usuário não pôde ser encontrado</p></div><div class="sections"><div class="section"><div class="input-container"><div class="label-container"><label>E-mail</label></div><div class="controls"><input type="email" name="email" placeholder="Escreve seu email" data-validate="data-validate" data-validate-required="requeridos"/></div></div><div class="input-container"><div class="label-container"><label>Senha</label></div><div class="controls"><input type="password" name="password" placeholder="Escreve seu senha" data-validate="data-validate" data-validate-required="requeridos"/></div></div><div class="cta-container"><button type="submit" class="btn btn-large primary">Entrar</button></div></div></div></form>');
        return buf.join("");
    };


    // login/password.jade:main-nav compiled template
    templatizer["login"]["password"]["main-nav"] = function tmpl_login_password_main_nav() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="top-nav main-nav"><div class="top-nav-left"><div class="top-nav-logo"><a href="/"><div class="logo-image-container"><img src="/images/logo.png"/></div></a></div></div><div class="top-nav-center"><div class="top-nav-contact"><div class="top-nav-contact-header"></div></div></div><div class="top-nav-right"><ul><li class="login-link"><a href="/login"><i class="fa fa-lock"></i>Já fiz meu pedido</a></li></ul></div></nav>');
        return buf.join("");
    };

    // me/applications/view.jade compiled template
    templatizer["me"]["applications"]["view"] = function tmpl_me_applications_view(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(Date, application, goTopPage, numeral) {
            buf.push('<div class="me-site-layout">');
            buf.push(templatizer["me"]["applications"]["view"]["me-nav"](locals));
            buf.push('<div class="content-container"><div class="application-view">');
            if (application.auction) {
                buf.push('<div class="accepted-page">               </div>');
                var anyAccepted = false;
                var anyValid = false;
                for (var i = 0; i < application.auction.bids.length; i++) {
                    if (application.auction.bids[i].accepted === true) {
                        anyAccepted = true;
                    }
                }
                if (anyAccepted == true) {
                    buf.push('<div class="accepted-page"><h1>Obrigado!</h1><p>Nos iremos processar as informações e retornamos em breve</p><a href="/logout" class="btn primary">Sair</a></div>');
                } else {
                    buf.push('<div class="auction-header">');
                    buf.push(templatizer["me"]["applications"]["view"]["application-details"](application));
                    buf.push("</div>");
                    if (application.auction.bids.length > 0) {
                        buf.push('<div class="bids-section">');
                        buf.push(templatizer["me"]["applications"]["view"]["bids"](application));
                        buf.push("</div>");
                    } else {
                        buf.push('<div class="waiting-section">');
                        buf.push(templatizer["me"]["applications"]["view"]["waiting"]());
                        buf.push("</div>");
                    }
                }
            } else {
                if (application.applicationState <= 2 && (!application.uiState || !application.uiState.hasCompletedApplication)) {
                    if (!application.uiState.hasSimulatedValue) {
                        buf.push(templatizer["me"]["applications"]["view"]["application-simulate-values"](application));
                    } else {
                        if (application.securityType === "no-security") {
                            buf.push(templatizer["me"]["applications"]["view"]["application-complete-cp"](application));
                        } else if (application.securityType === "car") {
                            buf.push(templatizer["me"]["applications"]["view"]["application-complete"](application));
                        } else {
                            buf.push(templatizer["me"]["applications"]["view"]["application-complete-he"](application));
                        }
                    }
                } else if (application.applicationState == 16) {
                    buf.push('<div class="accepted-page"><h2> <img src="/images/partner-logos/simplic.png" alt="Simplic" height="42"/></h2><h4>O seu pedido de crédito não foi aprovado nos critérios da FinanZero, mas temos um parceiro que pode te ajudar     </h4><a href="http://bit.ly/SimplicStatus" class="btn primary">Clique aqui e peça um empréstimo com a Simplic</a></div>');
                } else {
                    buf.push('<div class="accepted-page"><h1>Obrigado pelo seu cadastro em nosso site. </h1><h3>Entraremos em contato tão logo tenhamos novidades sobre o seu pedido de crédito.</h3><h3><a href="../../">Ver meus pedidos de crédito</a></h3></div>');
                }
            }
            buf.push('<div class="more-details">');
            buf.push(templatizer["me"]["applications"]["view"]["faq_customers_logged"]());
            buf.push("</div></div></div></div>");
        }).call(this, "Date" in locals_for_with ? locals_for_with.Date : typeof Date !== "undefined" ? Date : undefined, "application" in locals_for_with ? locals_for_with.application : typeof application !== "undefined" ? application : undefined, "goTopPage" in locals_for_with ? locals_for_with.goTopPage : typeof goTopPage !== "undefined" ? goTopPage : undefined, "numeral" in locals_for_with ? locals_for_with.numeral : typeof numeral !== "undefined" ? numeral : undefined);
        return buf.join("");
    };

    // me/applications/view.jade:faq_customers_logged compiled template
    templatizer["me"]["applications"]["view"]["faq_customers_logged"] = function tmpl_me_applications_view_faq_customers_logged() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="faq_customers_logged"><h2>Perguntas mais frequentes</h2><ul><li><h4>Quais são as possíveis respostas ao meu pedido?</h4><p><strong> Pedido Incompleto </strong> - Precisamos de mais informações sobre você. Complete seu cadastro no botão em destaque para que possamos buscar as melhores opções de crédito disponíveis.</p><p><strong> Pedido em análise </strong> - O pedido foi preenchido completamente e nossos parceiros estão analisando suas chances de aprovação.</p><p><strong> Pedido não aprovado </strong> - O seu pedido não foi aprovado pelos critérios da FinanZero, mas temos um parceiro que pode te ajudar, a Simplic.</p></li><li><h4>Estou negativado, tenho alguma opção de empréstimo?</h4><a href="http://bit.ly/SimplicEmail"><strong> Sim! Peça aqui.</strong></a><p>Nós temos uma parceira que pode ajudar você. A Simplic tem empréstimo com contratação online e sem filas.</p><p>O parcelamento pode ser em até 12 vezes e o dinheiro é disponibilizado na conta em até 48h após a aprovação.</p></li><li><h4>Como funciona a Simplic?</h4><p>A Simplic oferece empréstimos pessoais online de até R$3.500, sem burocracia. <a href=\'http://bit.ly/SimplicEmail\'>Entre neste site</a>, selecione o valor e quantidade de parcelas, informe seus dados pessoais, inclusive os dados bancários.</p><p>A Simplic irá revisar seu pedido e caso seja aprovado entrará em contato com você e o dinheiro será creditado direto em sua conta bancária.</p></li></ul></div>');
        return buf.join("");
    };


    // me/applications/view.jade:waiting compiled template
    templatizer["me"]["applications"]["view"]["waiting"] = function tmpl_me_applications_view_waiting() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="waiting"><div class="waiting-columns"><div class="info-column"><h4>O que acontece agora?</h4><p>1. Entraremos em contato com os nossos parceiros para que eles possam analisar seu perfil e pedido de crédito.</p><p>2. Após receber suas opções, selecione o empréstimo que melhor se adapte às suas necessidades.</p><p>3. Envie seu documentos, assine o contrato e receba o dinheiro em sua conta.</p></div></div></div>');
        return buf.join("");
    };


    // me/applications/view.jade:bids compiled template
    templatizer["me"]["applications"]["view"]["bids"] = function tmpl_me_applications_view_bids(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="bids">');
        var count = 0;
        (function() {
            var $obj = application.auction.bids;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var bid = $obj[$index];
                    if (!bid.rejected) {
                        count = count + 1;
                    }
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var bid = $obj[$index];
                    if (!bid.rejected) {
                        count = count + 1;
                    }
                }
            }
        }).call(this);
        if (count > 0) {
            buf.push('<div class="bids-section-header"><h2>Suas propostas atuais</h2><div class="bids-headers"><div class="amount-header">Valor pré-aprovado</div><div class="period-months-header">Nº de Parcelas</div><div class="monthly-installment-header">Prestação mensal</div></div><div class="bids-list">');
            (function() {
                var $obj = application.auction.bids;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var bid = $obj[$index];
                        if (!bid.rejected) {
                            buf.push('<div class="bids-list-item"><div class="logo-column"><div class="image-container"><img' + jade.attr("src", bid.supplier.logoImageUrl, true, false) + '/></div></div><div class="amount-column"> <h3>' + jade.escape((jade_interp = numeral(bid.approvedAmount).format("$ 0,0.00")) == null ? "" : jade_interp) + '  ¹</h3></div><div class="period-months-column"> <h4>' + jade.escape((jade_interp = bid.approvedPeriodMonths) == null ? "" : jade_interp) + '</h4></div><div class="monthly-installment-column">');
                            if (bid.monthlyInstallment > 0) {
                                buf.push("<h3>" + jade.escape((jade_interp = numeral(bid.monthlyInstallment).format("$ 0,0.00")) == null ? "" : jade_interp) + "</h3>");
                            } else {
                                buf.push("<p></p>");
                            }
                            buf.push('</div><div class="action-buttons-column"><a' + jade.attr("href", "/me/applications/" + application.id + "/offers/" + bid.id, true, false) + ' class="btn primary">Aceitar &raquo;</a></div></div>');
                        }
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var bid = $obj[$index];
                        if (!bid.rejected) {
                            buf.push('<div class="bids-list-item"><div class="logo-column"><div class="image-container"><img' + jade.attr("src", bid.supplier.logoImageUrl, true, false) + '/></div></div><div class="amount-column"> <h3>' + jade.escape((jade_interp = numeral(bid.approvedAmount).format("$ 0,0.00")) == null ? "" : jade_interp) + '  ¹</h3></div><div class="period-months-column"> <h4>' + jade.escape((jade_interp = bid.approvedPeriodMonths) == null ? "" : jade_interp) + '</h4></div><div class="monthly-installment-column">');
                            if (bid.monthlyInstallment > 0) {
                                buf.push("<h3>" + jade.escape((jade_interp = numeral(bid.monthlyInstallment).format("$ 0,0.00")) == null ? "" : jade_interp) + "</h3>");
                            } else {
                                buf.push("<p></p>");
                            }
                            buf.push('</div><div class="action-buttons-column"><a' + jade.attr("href", "/me/applications/" + application.id + "/offers/" + bid.id, true, false) + ' class="btn primary">Aceitar &raquo;</a></div></div>');
                        }
                    }
                }
            }).call(this);
            buf.push('</div><div class="bids-section-footer"><p>¹ <b>Atenção</b>: Você foi pré-aprovado pelo nosso parceiro de acordo com as informações fornecidas na sua solicitação. O processo final de aprovação dependerá da comprovação dos dados informados diretamente com o parceiro escolhido. Esta é uma pré-aprovação e não representa um compromisso do parceiro em conceder o crédito ou manter as demais condições aqui informadas.</p><p><span style="color:red;">Nós nunca pedimos nenhum tipo de depósito ou pagamento para análise ou liberação do crédito. </span>Você só vai começar a pagar o seu empréstimo ou financiamento, diretamente para o banco ou financeira, após receber o crédito.</p></div></div>');
        } else {
            buf.push('<div class="bids-header"><p>Nossos parceiros estão processando a sua solicitação e fazendo a análise do crédtito.<br/>Quanto houver novidades, entraremos em contato e atualizaremos essa página.</p></div>');
        }
        buf.push("</div>");
        return buf.join("");
    };


    // me/applications/view.jade:application-simulate-values compiled template
    templatizer["me"]["applications"]["view"]["application-simulate-values"] = function tmpl_me_applications_view_application_simulate_values(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        goTopPage();
        buf.push('<div class="application-complete-container"><form class="application-simulate"><input type="hidden" name="id"' + jade.attr("value", application.id, true, false) + '/><input type="hidden" name="_revision"' + jade.attr("value", application.revision, true, false) + '/><input type="hidden" name="simulating"' + jade.attr("value", application.uiState.hasSimulatedValue, true, false) + '/><input type="hidden" name="address1"' + jade.attr("value", application.address1, true, false) + '/><input type="hidden" name="neighbourhood"' + jade.attr("value", application.neighbourhood, true, false) + '/><input type="hidden" name="city"' + jade.attr("value", application.city, true, false) + '/><div class="section simulate-section">');
        if (application.securityType === "car" && !application.securityIsOwned) {
            buf.push("<h3>Simule as parcelas do seu financiamento.</h3>");
        } else {
            buf.push("<h3>Simule as parcelas do seu emprestimo.</h3>");
        }
        buf.push('<div class="two-col">');
        if (application.securityType !== "home" && application.securityType !== "no-security") {
            buf.push('<div class="col compact"><div class="label-container"><label>Tem restrições de crédito?*</label></div><div class="controls disable-simulated">');
            buf.push(templatizer["me"]["applications"]["view"]["radio-button-editor"]("hasCreditRestrictions", "Selecione uma opção", "false", "Não", application.hasCreditRestrictions === false, "true", "Sim", application.hasCreditRestrictions === true));
            buf.push("</div></div>");
        }
        if (application.securityType !== "home") {
            buf.push('<div class="col"><div class="label-container"><label>Renda mensal*</label></div><div class="controls disable-simulated"><input autocomplete="off" type="tel" placeholder="Renda média mensal em R$"' + jade.attr("value", application.monthlyIncome === 0 ? "" : application.monthlyIncome, true, false) + ' name="monthlyIncome" title="Informe a sua renda média mensal" money-input-mask="0" data-validate="data-validate" data-validate-min="1000,Informe a sua renda média (mensal) - mínimo 1.000" data-validate-max="70000,Informe a sua renda média (mensal) - até 70.000" data-validate-required="Informe a sua renda média (mensal)"/></div></div>');
        } else {
            buf.push('<div class="col"><div class="label-container"><label>Renda familiar mensal (total)*</label></div><div class="controls disable-simulated"><input autocomplete="off" type="tel" placeholder="Renda familiar  média mensal em R$"' + jade.attr("value", application.householdMonthlyIncome === 0 ? "" : application.householdMonthlyIncome, true, false) + ' name="householdMonthlyIncome" title="Informe a renda média mensal da sua família" data-validate-min="1000,Informe a renda média mensal da família - mínimo 1.000" data-validate-max="100000,Informe a rendamédia mensal da família - até 100.000" money-input-mask="0" data-validate="data-validate" data-validate-required="Informe a renda média (mensal) da família"/></div></div>');
        }
        buf.push('<div class="col"><div class="label-container"><label>Tem conta no banco *</label></div><div class="controls disable-simulated">');
        buf.push(templatizer["me"]["applications"]["view"]["bank-name-editor"]("bankName", application.bankName, "Selecione uma opção na lista"));
        buf.push('</div></div><div class="col"><div class="label-container"><label>Tipo de conta *</label></div><div class="controls disable-simulated">');
        buf.push(templatizer["me"]["applications"]["view"]["account-type-editor"]("accountType", application.accountType, true));
        buf.push('</div></div><div class="col"><div class="label-container"><label>CEP*</label></div><div class="controls disable-simulated"><input autocomplete="off" type="tel" name="zipCode" placeholder="00000-000" data-validate="data-validate" data-input-mask="99999-999" data-validate-required="Preencha um CEP válido"' + jade.attr("value", application.zipCode, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Estado*</label></div><div class="controls disable-simulated">');
        var states = [ "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO" ];
        buf.push('<select name="state" data-validate="data-validate" data-validate-required="Necessário"><option value="">Selecionar</option>');
        (function() {
            var $obj = states;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var state = $obj[$index];
                    buf.push("<option" + jade.attr("value", state, true, false) + jade.attr("selected", application.state == state, true, false) + ">" + jade.escape((jade_interp = state) == null ? "" : jade_interp) + "</option>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var state = $obj[$index];
                    buf.push("<option" + jade.attr("value", state, true, false) + jade.attr("selected", application.state == state, true, false) + ">" + jade.escape((jade_interp = state) == null ? "" : jade_interp) + "</option>");
                }
            }
        }).call(this);
        buf.push("</select></div></div>");
        if (application.securityType === "home") {
            buf.push('<div class="col"><div class="label-container"><label>Tipo do imóvel*</label></div><div class="controls disable-simulated">           ');
            buf.push(templatizer["me"]["applications"]["view"]["property-type-editor"]("homeSecurity.propertyType", application.homeSecurity.propertyType));
            buf.push('</div></div><div class="col"><div class="label-container"><label>Tipo de construção*</label></div><div class="controls disable-simulated">           ');
            buf.push(templatizer["me"]["applications"]["view"]["construction-type-editor"]("homeSecurity.constructionType", application.homeSecurity.constructionType));
            buf.push('</div></div><div class="col"><div class="label-container"><label>Valor do imóvel</label></div><div class="controls disable-simulated"><input type="text"' + jade.attr("value", application.homeSecurity.value === 0 ? "" : application.homeSecurity.value, true, false) + ' name="homeSecurity.value" title="Informe o valor de mercado do imóvel" money-input-mask="0" data-validate="data-validate" data-validate-min="80000,Informe no mínimo R$ 80.000" data-validate-max="3000000,Informe o valor do imóvel (até R$ 3.000.000)" data-validate-required="Informe o valor de mercado do imóvel"/></div></div>');
        }
        if (application.securityType === "no-security" || application.securityIsOwned) {
            buf.push('<div class="col"><div class="label-container"><label>Valor solicitado:</label></div><div class="controls disable-simulated">');
            var validationMax = application.securityType === "no-security" ? "35000,Informe o valor desejado - até R$ 35.000" : application.securityType === "home" ? "1500000,Informe o valor desejado - até R$ 1.500.000" : "240000,Informe o valor desejado - até R$ 240.000";
            var validationMin = application.securityType === "home" ? "40000,Informe o valor mínimo de R$ 40.000" : "1000,Informe no mínimo R$ 1.000";
            buf.push('<input type="text"' + jade.attr("value", application.appliedAmount, true, false) + ' name="appliedAmount" title="Informe o valor do financiamento" money-input-mask="0"' + jade.attr("data-validate-min", validationMin, true, false) + jade.attr("data-validate-max", validationMax, true, false) + ' data-validate="data-validate" data-validate-required="Informe o valor desejado para o empréstimo"/></div></div>');
        }
        if (application.securityType === "car") {
            buf.push('<div class="col"><div class="label-container"><label>Tipo de veículo*</label></div><div class="controls disable-simulated"><label class="radio radio-fixed inline"><input id="security-subtype-car" type="radio" name="securitySubtype" value="car"' + jade.attr("checked", application.securitySubtype === "car", true, false) + ' data-validate="data-validate" data-validate-required="Escolha uma das opções"/><span class="security-subtype-car">Carro</span></label><label class="radio radio-fixed inline"><input id="security-subtype-truck" type="radio" name="securitySubtype"' + jade.attr("checked", application.securitySubtype === "truck", true, false) + ' value="truck"/><span class="security-subtype-truck">Caminhão</span></label></div></div><div class="col"><div class="label-container"><label>Ano (modelo) do veículo*</label></div><div class="controls disable-simulated">');
            buf.push(templatizer["me"]["applications"]["view"]["year-editor"]("vehicleSecurity.modelYear", application.vehicleSecurity.modelYear, 1, 30));
            buf.push('</div></div><div class="col"><div class="label-container"><label>Valor do veículo</label></div><div class="controls disable-simulated"><input type="text"' + jade.attr("value", application.vehicleSecurity.value === 0 ? "" : application.vehicleSecurity.value, true, false) + ' name="vehicleSecurity.value" title="Informe o valor de mercado (tabela) do veículo" money-input-mask="0" data-validate="data-validate" data-validate-min="10000,Informe no mínimo R$ 10.000" data-validate-max="250000,Informe o valor do veículo até R$ 250.000" data-validate-required="Informe o valor de mercado (tabela) do veículo"/></div></div>');
            if (!application.securityIsOwned) {
                buf.push('<div class="col"><div class="label-container"><label>Valor de entrada:</label></div><div class="controls disable-simulated"><input type="text"' + jade.attr("value", application.vehicleSecurity.downPayment === 0 ? "" : application.vehicleSecurity.downPayment, true, false) + ' name="vehicleSecurity.downPayment" title="Informe o valor da entrada" money-input-mask="0" data-validate="data-validate" data-validate-required="Informe o valor da entrada que você vai pagar"/></div></div>');
            }
        }
        buf.push('<div class="col"><div class="label-container"><label>Período do financiamento (meses):</label></div><div class="controls disable-simulated">');
        var validationMax = application.securityType === "no-security" ? "36,Informe o número de parcelas (até 36 meses)" : application.securityType === "home" ? "180,Informe o número de parcelas (até 180 meses)" : "60,Informe o número de parcelas (até 60 meses)";
        var validationMin = application.securityType === "home" ? "36,Informe o número de parcelas (mínimo 36 meses)" : "6,Informe o número de parcelas (mínimo 6)";
        buf.push('<input autocomplete="off" type="tel"' + jade.attr("value", application.loanPeriodInMonths, true, false) + ' name="loanPeriodInMonths" title="Informe o número de parcelas" data-validate="data-validate"' + jade.attr("data-validate-min", validationMin, true, false) + jade.attr("data-validate-max", validationMax, true, false) + ' data-validate-required="Obrigatório"/></div></div></div></div><div class="alert-installment-too-high alert info hide"><p>O valor da parcela está muito alto, se comparado à renda informada. Geralmente o valor máximo aceito pelos nossos parceiros é de 30% do valor da renda. Recomendamos que <b>altere o valor ou o número de parcelas</b> e refaça a simulação.</p></div><div class="section simulated-value hide"><h3>Simulação</h3><div class="simulated-values"><span>Parcela estimada:&nbsp;</span><span class="simulated-installment"></span></div></div><div class="cta-container simulated-value hide"><div class="alert info simulation-message hide"> </div><button name="acceptSimulation" type="button" class="btn large primary">Continuar com o pedido</button><button name="simulateAgain" type="button" class="btn large secondary">Simular novamente</button><button name="rejectSimulation" type="button" class="btn large secondary">Não tenho interesse, obrigado</button><div class="alert errors hide">Preencha todos os campos indicados antes de simular seu crédito.</div><div class="simulation-disclaimer"><p>Os valores informados são uma prévia feita com base nas informações fornecidas.</p><p>O valor real da parcela a ser paga dependerá da aprovação de crédito por parte das nossas instituições parceiras e de comprovação das informações fornecidas.</p></div><div class="deposit-disclaimer"><b>ATENÇÃO: NÃO faça nenhum depósito ou pagamento para análise ou liberação do empréstimo.</b><div class="deposit-inner"> Nosso serviço é gratuito, portanto nós nunca pedimos pagamentos antecipados. Você só vai pagar seu empréstimo ou financiamento, diretamente para o banco ou financeira, após receber o crédito.</div></div></div><div class="cta-container simulation-rejected hide"><div class="simulation-rejected-disclaimer"><h3>Simulação</h3><h2> <img src="/images/partner-logos/simplic.png" alt="Simplic" height="42"/></h2><p>Comparamos as opções disponíveis no site da FinanZero e neste momento temos uma única parceira:</p><p>A Simplic possui ofertas que poderão atender um pedido de crédito de até R$ 3.500.</p></div><a href="http://bit.ly/SimplicStatus" class="btn large primary">Clique aqui e peça um empréstimo na Simplic</a></div><div class="cta-container simulating-buttons"><button name="simulateNow" type="button" class="btn large primary">Simular Agora</button><div class="alert errors hide">Preencha todos os campos indicados antes de simular seu crédito.</div></div><div class="cta-container server-wait hide"><h2><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br/><span class="wait">Procurando as melhores opções</span></h2></div></form></div>');
        return buf.join("");
    };


    // me/applications/view.jade:application-complete-he compiled template
    templatizer["me"]["applications"]["view"]["application-complete-he"] = function tmpl_me_applications_view_application_complete_he(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="application-complete-container"><h2>Último passo!  Estamos quase lá.</h2>');
        goTopPage();
        var extraInformation = false;
        buf.push('<form class="application-complete"><input type="hidden" name="id"' + jade.attr("value", application.id, true, false) + '/><input type="hidden" name="_revision"' + jade.attr("value", application.revision, true, false) + '/><div class="sections"><div class="section"><div class="col"><div class="label-container"><label>Motivo de pedir esse empréstimo *</label></div><div class="controls">');
        buf.push(templatizer["me"]["applications"]["view"]["loan-reason-editor"]("loanReason", application.loanReason));
        buf.push("</div></div></div>");
        buf.push(templatizer["me"]["applications"]["view"]["address-section"](application, extraInformation));
        buf.push(templatizer["me"]["applications"]["view"]["personal-details-section"](application, extraInformation));
        if (application.civilStatus === "married") {
            buf.push(templatizer["me"]["applications"]["view"]["co-applicant-section"](application, extraInformation));
        }
        buf.push(templatizer["me"]["applications"]["view"]["income-section"](application, extraInformation));
        buf.push(templatizer["me"]["applications"]["view"]["bank-details-section"](application, extraInformation));
        buf.push('<div class="cta-container"><button type="submit" class="btn large primary">Enviar</button><div class="alert errors hide">Existem erros de prenchimento nessa página. Por favor corrija antes de continuar.</div></div></div></form></div>');
        return buf.join("");
    };


    // me/applications/view.jade:application-complete-cp compiled template
    templatizer["me"]["applications"]["view"]["application-complete-cp"] = function tmpl_me_applications_view_application_complete_cp(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        goTopPage();
        buf.push('<div class="application-complete-container"><h2>Último passo!  Estamos quase lá.        </h2>');
        var extraInformation = application.securityType === "no-security" && application.uiState.shortForm !== "true";
        buf.push('<form class="application-complete-cp"><input type="hidden" name="id"' + jade.attr("value", application.id, true, false) + '/><input type="hidden" name="_revision"' + jade.attr("value", application.revision, true, false) + '/><div class="section"><div class="col"><div class="label-container"><label>Motivo para o empréstimo *</label></div><div class="controls">');
        buf.push(templatizer["me"]["applications"]["view"]["loan-reason-editor"]("loanReason", application.loanReason));
        buf.push('</div></div></div><div class="sections">              ');
        buf.push(templatizer["me"]["applications"]["view"]["address-section"](application, extraInformation));
        buf.push(templatizer["me"]["applications"]["view"]["personal-details-section"](application, extraInformation));
        if (application.civilStatus === "married") {
            buf.push(templatizer["me"]["applications"]["view"]["co-applicant-section"](application, extraInformation));
        }
        buf.push(templatizer["me"]["applications"]["view"]["income-section"](application, extraInformation));
        buf.push(templatizer["me"]["applications"]["view"]["bank-details-section"](application, extraInformation));
        buf.push(templatizer["me"]["applications"]["view"]["reference-section"](application, extraInformation));
        buf.push('<div class="cta-container section"><button type="submit" class="btn large primary">Enviar</button><div class="alert errors hide">Existem erros de prenchimento nessa página. Por favor corrija antes de continuar.</div></div></div></form></div>');
        return buf.join("");
    };


    // me/applications/view.jade:application-complete compiled template
    templatizer["me"]["applications"]["view"]["application-complete"] = function tmpl_me_applications_view_application_complete(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        goTopPage();
        buf.push('<div class="application-complete-container"><h2>Último passo!  Estamos quase lá.</h2>');
        var extraInformation = false;
        buf.push('<form class="application-complete"><input type="hidden" name="id"' + jade.attr("value", application.id, true, false) + '/><input type="hidden" name="_revision"' + jade.attr("value", application.revision, true, false) + '/><div class="sections">');
        buf.push(templatizer["me"]["applications"]["view"]["address-section"](application, extraInformation));
        buf.push(templatizer["me"]["applications"]["view"]["personal-details-section"](application, extraInformation));
        if (application.civilStatus === "married") {
            buf.push(templatizer["me"]["applications"]["view"]["co-applicant-section"](application, extraInformation));
        }
        buf.push(templatizer["me"]["applications"]["view"]["income-section"](application, extraInformation));
        buf.push(templatizer["me"]["applications"]["view"]["bank-details-section"](application, extraInformation));
        buf.push(templatizer["me"]["applications"]["view"]["reference-section"](application, extraInformation));
        buf.push(templatizer["me"]["applications"]["view"]["car-security-section"](application, extraInformation));
        buf.push('<div class="cta-container"><button type="submit" class="btn large primary">Enviar</button><div class="alert errors hide">Existem erros de prenchimento nessa página. Por favor corrija antes de continuar.</div></div></div></form></div>');
        return buf.join("");
    };


    // me/applications/view.jade:bank-details-section compiled template
    templatizer["me"]["applications"]["view"]["bank-details-section"] = function tmpl_me_applications_view_bank_details_section(application, extraInformation) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="section bank-details-section"><h3>Conta Bancária</h3><div class="two-col">           <div class="col">               <div class="label-container"><label>Conta no banco *</label></div><div class="controls">');
        buf.push(templatizer["me"]["applications"]["view"]["bank-name-editor"]("bankName", application.bankName, "Selecione uma opção na lista"));
        buf.push("</div></div>");
        if (extraInformation) {
            buf.push('<div class="col has-bank-details"><div class="label-container"><label>Agência da conta *</label></div><div class="controls"><input autocomplete="off" type="tel" placeholder="agência" data-validate="data-validate" name="agency" data-input-mask="9999"' + jade.attr("value", application.agency, true, false) + ' data-validate-required="Preencha número da agência onde tem conta"/></div></div><div class="col has-bank-details"><div class="label-container"><label>Número da conta e dígito *</label></div><div class="controls">');
            buf.push(templatizer["me"]["applications"]["view"]["bank-account-editor"]("accountNumber", application.accountNumber));
            buf.push("</div></div>");
        }
        buf.push('<div class="col has-bank-details"><div class="label-container"><label>Tipo da conta *</label></div><div class="controls">');
        buf.push(templatizer["me"]["applications"]["view"]["account-type-editor"]("accountType", application.accountType, true));
        buf.push('</div></div><div class="col has-bank-details"><div class="label-container"><label>Quando abriu essa conta? *</label></div><div class="controls">');
        buf.push(templatizer["me"]["applications"]["view"]["month-editor"]("accountOpenDate", application.accountOpenDate, new Date().getFullYear(), "Informe o mês e ano de abertura"));
        buf.push("</div></div></div>");
        if (application.securityType !== "home") {
            buf.push('<div class="col"><div class="label-container"><label>Tem restrições de crédito?*</label></div><div class="controls">');
            buf.push(templatizer["me"]["applications"]["view"]["radio-button-editor"]("hasCreditRestrictions", "Selecione uma opção", "false", "Não", application.hasCreditRestrictions === false, "true", "Sim", application.hasCreditRestrictions === true));
            buf.push("</div></div>");
        }
        buf.push("</div>");
        return buf.join("");
    };


    // me/applications/view.jade:reference-section compiled template
    templatizer["me"]["applications"]["view"]["reference-section"] = function tmpl_me_applications_view_reference_section(application, extraInformation) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="section reference-section">');
        if (extraInformation) {
            buf.push("<h3>Referências Pessoais</h3>");
        } else {
            buf.push("<h3>Referência Pessoal</h3>");
        }
        buf.push('<div class="two-col"><div class="col"><div class="label-container"><label>Nome da pessoa*</label></div><div class="controls"><input type="text" placeholder="Joao da Silva"' + jade.attr("value", application.reference1Name, true, false) + ' name="reference1Name" title="Entre o nome de uma pessoa que possa falar de você" data-validate="data-validate" data-validate-required="Informe o nome de uma pessoa que possa falar de você"/></div></div><div class="col"><div class="label-container"><label>Grau de relacionamento da referência*</label></div><div class="controls">');
        buf.push(templatizer["me"]["applications"]["view"]["intimacy-grade-editor"]("reference1GradeOfIntimacy", application.reference1GradeOfIntimacy, "Informe sua relação com a referência"));
        buf.push('</div></div><div class="col"><div class="label-container"><label>Telefone*</label></div><div class="controls"><input autocomplete="off" type="tel" placeholder="(XX) XXXX-XXXX" name="reference1PhoneNumber" title="Preencha o número de telefone da referência"' + jade.attr("value", application.reference1PhoneNumber, true, false) + ' data-validate="data-validate" data-validate-required="Preencha o número de telefone da referência" data-input-mask="(99) 99999 9999"/></div></div>');
        if (extraInformation) {
            buf.push('<div class="col"></div><div class="col"><div class="label-container"><label>Nome de outra pessoa*</label></div><div class="controls"><input type="text" placeholder="Joao da Silva"' + jade.attr("value", application.reference2Name, true, false) + ' name="reference2Name" title="Entre o nome de uma pessoa que possa falar de você" data-validate="data-validate" data-validate-required="Informe o nome de uma pessoa que possa falar de você"/></div></div><div class="col"><div class="label-container"><label>Grau de relacionamento da segunda referência*</label></div><div class="controls">');
            buf.push(templatizer["me"]["applications"]["view"]["intimacy-grade-editor"]("reference2GradeOfIntimacy", application.reference2GradeOfIntimacy, "Informe sua relação com a referência"));
            buf.push('</div></div><div class="col"><div class="label-container"><label>Telefone da segunda referência*</label></div><div class="controls"><input autocomplete="off" type="tel" placeholder="(XX) XXXX-XXXX" name="reference2PhoneNumber" title="Preencha o número de telefone da referência"' + jade.attr("value", application.reference2PhoneNumber, true, false) + ' data-validate="data-validate" data-validate-required="Preencha o número de telefone da referência" data-input-mask="(99) 99999 9999"/></div></div>');
        }
        buf.push("</div></div>");
        return buf.join("");
    };


    // me/applications/view.jade:car-security-section compiled template
    templatizer["me"]["applications"]["view"]["car-security-section"] = function tmpl_me_applications_view_car_security_section(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="section car-security-section"><h3 class="hide-simulating">Dados do veículo</h3><div class="two-col"><div class="col hide-simulating"><div class="label-container"><label>Placa' + jade.escape((jade_interp = application.securityIsOwned ? "*" : "") == null ? "" : jade_interp) + '</label></div><div class="controls"><input type="text" name="vehicleSecurity.registrationNumber" placeholder="Placa no formato XXX-9999" data-validate="data-validate" data-input-mask="AAA-9999"' + jade.attr("data-validate-required", application.securityIsOwned ? "Informe a placa do veículo, com três letras e 4 dígitos" : null, true, false) + jade.attr("value", application.vehicleSecurity.registrationNumber, true, false) + '/></div></div><div class="col hide-simulating"><div class="label-container"><label>Valor do veículo</label></div><div class="controls"><input type="text"' + jade.attr("value", application.vehicleSecurity.value === 0 ? "" : application.vehicleSecurity.value, true, false) + ' name="vehicleSecurity.value" title="Informe o valor de mercado (tabela) do veículo" money-input-mask="0" data-validate="data-validate" data-validate-required="Informe o valor de mercado (tabela) do veículo"/></div></div>');
        if (!application.securityIsOwned) {
            buf.push('<div class="col"><div class="label-container"><label>Valor de entrada:</label></div><div class="controls"><input type="text"' + jade.attr("value", application.vehicleSecurity.downPayment === 0 ? "" : application.vehicleSecurity.downPayment, true, false) + ' name="vehicleSecurity.downPayment" title="Informe o valor da entrada" money-input-mask="0" data-validate="data-validate" data-validate-required="Informe o valor da entrada que você vai pagar"/></div></div>');
        }
        buf.push('<div class="col hide-simulating"><div class="label-container"><label>Marca do veículo*</label></div><div class="controls"><input type="text" name="vehicleSecurity.brand" placeholder="" data-validate="data-validate" data-validate-required="Necessário"' + jade.attr("value", application.vehicleSecurity.brand, true, false) + '/></div></div><div class="col hide-simulating"><div class="label-container"><label>Modelo*</label></div><div class="controls"><input type="text" name="vehicleSecurity.model" placeholder="" data-validate="data-validate" data-validate-required="Necessário"' + jade.attr("value", application.vehicleSecurity.model, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Ano (modelo) do veículo*</label></div><div class="controls">');
        buf.push(templatizer["me"]["applications"]["view"]["year-editor"]("vehicleSecurity.modelYear", application.vehicleSecurity.modelYear, 1, 99, true));
        buf.push('</div></div><div class="col"><div class="label-container"><label>Tipo de veículo*</label></div><div class="controls"><label class="radio radio-fixed inline"><input id="security-subtype-car" type="radio" name="securitySubtype" value="car"' + jade.attr("checked", application.securitySubtype === "car", true, false) + ' disabled="disabled" data-validate="data-validate" data-validate-required="Escolha uma das opções"/><span class="security-subtype-car">Carro</span></label><label class="radio radio-fixed inline"><input id="security-subtype-truck" type="radio" name="securitySubtype" disabled="disabled"' + jade.attr("checked", application.securitySubtype === "truck", true, false) + ' value="truck"/><span class="security-subtype-truck">Caminhão</span></label></div></div><div class="col hide-simulating">');
        if (!application.securityIsOwned) {
            buf.push('<div class="label-container"><label>Cor*</label></div><div class="controls"><input type="text" name="vehicleSecurity.color" placeholder="" data-validate="data-validate" data-validate-required="Informe a cor do veículo"' + jade.attr("value", application.vehicleSecurity.color, true, false) + "/></div>");
        }
        buf.push("</div></div></div>");
        return buf.join("");
    };


    // me/applications/view.jade:income-section compiled template
    templatizer["me"]["applications"]["view"]["income-section"] = function tmpl_me_applications_view_income_section(application, extraInformation) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="section income-section"><h3>Informações sobre a sua renda</h3><div class="two-col">');
        if (application.securityType !== "home") {
            buf.push('<div class="col"><div class="label-container"><label>Renda mensal*</label></div><div class="controls"><input autocomplete="off" type="tel" placeholder="Renda média mensal em R$"' + jade.attr("value", application.monthlyIncome === 0 ? "" : application.monthlyIncome, true, false) + ' name="monthlyIncome" data-validate-min="1000,Informe a renda média mensal da família - mínimo 1.000" data-validate-max="100000,Informe a rendamédia mensal da família - até 100.000" title="Informe a sua renda média mensal" money-input-mask="0" data-validate="data-validate" data-validate-required="Informe a sua renda média (mensal)"/></div></div>');
        } else {
            buf.push('<div class="col"><div class="label-container"><label>Renda familiar mensal (total)*</label></div><div class="controls disable-simulated"><input autocomplete="off" type="tel" placeholder="Renda familiar  média mensal em R$"' + jade.attr("value", application.householdMonthlyIncome === 0 ? "" : application.householdMonthlyIncome, true, false) + ' name="householdMonthlyIncome" title="Informe a renda média mensal da sua família" data-validate-min="1000,Informe a renda média mensal da família - mínimo 1.000" data-validate-max="100000,Informe a rendamédia mensal da família - até 100.000" money-input-mask="0" data-validate="data-validate" data-validate-required="Informe a renda média (mensal) da família"/></div></div>');
        }
        buf.push('<div class="col"><div class="label-container"><label>Tipo de comprovante de renda*</label></div><div class="controls">');
        buf.push(templatizer["me"]["applications"]["view"]["income-proof-document"]("incomeProofDocument", application.incomeProofDocument));
        buf.push("</div></div>");
        if (application.workStatus != "unemployed" && application.workStatus != "retired" && application.workStatus != "independent-contractor") {
            buf.push('<div class="col"><div class="label-container"><label>Empregador ou fonte de renda*</label></div><div class="controlseu"> <input type="text"' + jade.attr("value", application.companyName, true, false) + ' name="companyName" data-validate="data-validate" data-validate-required="Informe o nome da empresa ou instituição"/></div></div><div class="col"><div class="label-container"><label>Cargo ou profissão*</label></div><div class="controls">');
            buf.push(templatizer["me"]["applications"]["view"]["job-position-editor"]("jobPosition", application.jobPosition, application.workStatus));
            buf.push('</div></div><div class="col"><div class="label-container"><label>Trabalha na empresa desde*</label></div><div class="controls">');
            buf.push(templatizer["me"]["applications"]["view"]["date-editor"]("employmentDate", application.employmentDate, new Date().getFullYear(), "Informe a data de início"));
            buf.push('</div></div><div class="col"><div class="label-container"><label>CNPJ da empresa</label></div><div class="controls">');
            if (application.workStatus == "business-owner") {
                buf.push('<input autocomplete="off" type="tel" placeholder="Obrigatório para empresários" title="Preenchimento obrigatório para empresários"' + jade.attr("value", application.companyRegistrationNumber, true, false) + ' name="companyRegistrationNumber" data-input-mask="SS.SSS.SSS/SSSS-SS" data-validate="data-validate" data-validate-required="Informe o CNPJ da sua empresa"/>');
            } else {
                buf.push('<input type="text" placeholder="Obrigatório para empresários" title="Preenchimento obrigatório para empresários"' + jade.attr("value", application.companyRegistrationNumber, true, false) + ' name="companyRegistrationNumber" data-input-mask="SS.SSS.SSS/SSSS-SS"/>');
            }
            buf.push("</div></div>");
            buf.push(templatizer["me"]["applications"]["view"]["employer-address"](application));
            buf.push('<div class="col"><div class="label-container"><label>Como recebe seu salário?*</label></div><div class="controls">');
            buf.push(templatizer["me"]["applications"]["view"]["IncomePaymentMethod"](application.incomePaymentMethod, "Selecione uma opção..."));
            buf.push('</div></div><div class="col"><div class="label-container"><label>Quando recebe seu salário?*</label></div><div class="controls">');
            buf.push(templatizer["me"]["applications"]["view"]["IncomePaymentDay"](application.incomePaymentDay, "Selecione uma opção..."));
            buf.push('</div></div><div class="col"><div class="label-container"><label>Qual o valor aproximado do seu patrimônio?*</label></div><div class="controls">');
            buf.push(templatizer["me"]["applications"]["view"]["NetWorth"].call({
                block: function(buf) {
                    buf.push("    ");
                }
            }, application.netWorth, "Selecione uma opção..."));
            buf.push("</div></div>");
        }
        buf.push("</div></div>");
        return buf.join("");
    };


    // me/applications/view.jade:employer-address compiled template
    templatizer["me"]["applications"]["view"]["employer-address"] = function tmpl_me_applications_view_employer_address(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="col"><div class="label-container"><label>Telefone da empresa*</label></div><div class="controls"><input autocomplete="off" name="companyPhone" type="tel" placeholder="Telefone da empresa" data-validate="data-validate" data-input-mask="(99) 9999 9999" data-validate-required="Infornme o telefone da empresa"' + jade.attr("value", application.companyPhone, true, false) + '/></div></div><div class="col"><div class="label-container"><label>CEP da empresa*</label></div><div class="controls"><input autocomplete="off" type="tel" name="companyZipCode" placeholder="00000-000" data-validate="data-validate" data-input-mask="99999-999" data-validate-required="Preencha um CEP válido"' + jade.attr("value", application.companyZipCode, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Endereço da Empresa(logradouro)*</label></div><div class="controls"><input type="text" name="companyAddress" placeholder="Rua, Av, Praça, etc." data-validate="data-validate" data-validate-required="Informe o nome da rua, av, praça, etc."' + jade.attr("value", application.companyAddress, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Número*</label></div><div class="controls"><input autocomplete="off" type="tel" name="companyStreetNumber" placeholder="Número do endereço" data-validate="data-validate" data-validate-required="Número do endereço"' + jade.attr("value", application.companyStreetNumber, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Complemento do Endereço</label></div><div class="controls"><input type="text" name="companyAddressComplement" placeholder="Bloco, apartamento, etc."' + jade.attr("value", application.companyAddressComplement, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Bairro*</label></div><div class="controls"><input type="text" name="companyNeighbourhood" placeholder="Nome do bairro ou distrito" data-validate="data-validate" data-validate-required="Informe o seu bairro"' + jade.attr("value", application.companyNeighbourhood, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Cidade*</label></div><div class="controls"><input type="text" name="companyCity" data-validate="data-validate" data-validate-required="Informe o nome da cidade"' + jade.attr("value", application.companyCity, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Estado*</label></div><div class="controls">');
        buf.push(templatizer["me"]["applications"]["view"]["state-editor"]("companyState", application.companyState));
        buf.push("</div></div>");
        return buf.join("");
    };


    // me/applications/view.jade:co-applicant-section compiled template
    templatizer["me"]["applications"]["view"]["co-applicant-section"] = function tmpl_me_applications_view_co_applicant_section(application, extraInformation) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="section co-applicant-section"><h3>Dados do Cônjuge</h3><div class="two-col"> <div class="col"><div class="label-container"><label>Primeiro nome*</label></div><div class="controls"><input type="text" placeholder="João Carlos"' + jade.attr("value", application.coApplicantFirstName, true, false) + ' name="coApplicantFirstName" data-validate="data-validate" data-validate-required="Informe o nome do marido ou esposa"/></div></div><div class="col"><div class="label-container"><label>Sobrenomes*</label></div><div class="controls"><input type="text" placeholder="de Oliveira Machado" name="coApplicantLastName"' + jade.attr("value", application.coApplicantLastName, true, false) + ' data-validate="data-validate" data-validate-required="Informe o nome do marido ou esposa"/></div></div>');
        if (extraInformation) {
            buf.push('<div class="col"><div class="label-container"><label>Gênero*</label></div><div class="controls">');
            buf.push(templatizer["me"]["applications"]["view"]["gender-editor"]("coApplicantGender", application.coApplicantGender, "Informe o gênero do seu cônjuge"));
            buf.push("</div></div>");
        }
        buf.push('<div class="col"><div class="label-container"><label>Data de nascimento*</label></div><div class="controls">');
        buf.push(templatizer["me"]["applications"]["view"]["date-editor"]("coApplicantBirthDate", application.coApplicantBirthDate, new Date().getFullYear() - 14, "Informe a Data de Nascimento"));
        buf.push("</div></div>");
        if (extraInformation) {
            buf.push('<div class="col"><div class="label-container"><label>CPF do cônjuge*</label></div><div class="controls"><input autocomplete="off" type="tel" placeholder="000.000.000-00" data-input-mask="999.999.999-99" name="coApplicantPersonalNumber"' + jade.attr("value", application.coApplicantPersonalNumber, true, false) + ' data-validate="data-validate" data-validate-required="Preencha o CPF do cônjuge" data-validate-cpf="Preencha o CPF do cônjuge"/></div></div>');
        }
        buf.push("</div></div>");
        return buf.join("");
    };


    // me/applications/view.jade:personal-details-section compiled template
    templatizer["me"]["applications"]["view"]["personal-details-section"] = function tmpl_me_applications_view_personal_details_section(application, extraInformation) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="section personal-data-section"><h3>Dados Pessoais</h3><div class="two-col"><div class="col"><div class="label-container"><label>Gênero*</label></div><div class="controls">');
        buf.push(templatizer["me"]["applications"]["view"]["gender-editor"]("gender", application.gender));
        buf.push('</div></div><div class="col"><div class="label-container"><label>Grau de instrução*</label></div><div class="controls"><select name="education" data-validate="data-validate" data-validate-required="Necessário"><option value="">Selecionar</option><option value="illiterate"' + jade.attr("selected", application.education == "illiterate", true, false) + '>Sem instrução formal</option><option value="primary"' + jade.attr("selected", application.education == "primary", true, false) + '>Primeiro grau completo</option><option value="secondary"' + jade.attr("selected", application.education == "secondary", true, false) + '>Segundo grau completo</option><option value="college"' + jade.attr("selected", application.education == "college", true, false) + '>Superior completo</option><option value="postgraduate"' + jade.attr("selected", application.education == "postgraduate", true, false) + ">Pós graduação</option></select></div></div>");
        if (extraInformation) {
            buf.push('<div class="col"><div class="label-container"><label>Tipo de documento*</label></div><div class="controls">');
            buf.push(templatizer["me"]["applications"]["view"]["document-type-editor"]("RGDocType", application.RGDocType));
            buf.push("</div></div>");
        }
        buf.push('<div class="col"><div class="label-container"><label>' + jade.escape((jade_interp = application.securityType == "no-security" && application.uiState.shortForm !== "true" ? "Número do Documento*" : "Número do RG*") == null ? "" : jade_interp) + '</label></div><div class="controls"><input autocomplete="off" type="tel" name="RG" placeholder="Número do RG ou equivalente"' + jade.attr("value", application.RG, true, false) + ' data-validate="data-validate" data-validate-required="Informe o número do documento"/></div></div><div class="col"><div class="label-container"><label>Órgão emissor e Estado*</label></div><div class="controls"><div class="composite-control two-cols"><div class="col">');
        buf.push(templatizer["me"]["applications"]["view"]["rg-expeditor-organization"]("RGExpeditorOrganisation", application.RGExpeditorOrganisation, "Órgão emissor do documento"));
        buf.push('</div><div class="col">');
        buf.push(templatizer["me"]["applications"]["view"]["state-editor"]("RGOriginState", application.RGOriginState, "Estado emissor"));
        buf.push('</div></div></div></div><div class="col"><div class="label-container"><label>Data de emissão do RG*</label></div><div class="controls">');
        buf.push(templatizer["me"]["applications"]["view"]["date-editor"]("RGExpeditionDate", application.RGExpeditionDate, null, "Preencha a data de emissão do RG"));
        buf.push("</div></div>");
        if (extraInformation) {
            buf.push('<div class="col"><div class="label-container"><label>Nacionalidade*</label></div><div class="controls">');
            buf.push(templatizer["me"]["applications"]["view"]["nationality-editor"]("nationality", application.nationality));
            buf.push("</div></div>");
        }
        buf.push('<div class="col"><div class="label-container"><label>Cidade de nascimento*</label></div><div class="controls"><input type="text" name="placeOfBirth" placeholder="Cidade onde nasceu" data-validate="data-validate" data-validate-required="Informe o nome da cidade onde nasceu"' + jade.attr("value", application.placeOfBirth, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Estado onde nasceu*</label></div><div class="controls">');
        buf.push(templatizer["me"]["applications"]["view"]["state-editor"]("stateOfBirth", application.stateOfBirth, "Estado onde nasceu"));
        buf.push('</div></div><div class="col"><div class="label-container"><label>Nome completo da mãe*</label></div><div class="controls"><input type="text" name="mothersName" placeholder="" data-validate="data-validate" data-validate-required="Informe o nome da sua mãe"' + jade.attr("value", application.mothersName, true, false) + "/></div></div></div></div>");
        return buf.join("");
    };


    // me/applications/view.jade:address-section compiled template
    templatizer["me"]["applications"]["view"]["address-section"] = function tmpl_me_applications_view_address_section(application, extraInformation) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="section address-section"><h3>Dados da Residência</h3><div class="two-col"><div class="col housing-column"><div class="label-container"><label>Você reside em uma casa *</label></div><div class="controls"><select name="housing" data-validate="data-validate" data-validate-required="Selecione uma opção"><option value="">Selecione</option><option value="owned"' + jade.attr("selected", application.housing == "owned", true, false) + '>Própria</option><option value="mortgage"' + jade.attr("selected", application.housing == "mortgage", true, false) + '>Própria (financiada)</option><option value="rented"' + jade.attr("selected", application.housing == "rented", true, false) + '>Alugada</option><option value="family"' + jade.attr("selected", application.housing == "family", true, false) + '>De familiares</option><option value="others"' + jade.attr("selected", application.housing == "others", true, false) + ">Outro tipo</option></select></div></div>");
        if (extraInformation) {
            buf.push('<div class="col housing-column"><div class="label-container"><label>Tempo nessa residência*</label></div><div class="controls"><select name="housingTime" data-validate="data-validate" data-validate-required="Selecione uma opção"><option value="">Selecione</option><option value="3"' + jade.attr("selected", application.housingTime == 3, true, false) + '>Menos de 6 meses</option><option value="12"' + jade.attr("selected", application.housingTime == 12, true, false) + '>Até um ano</option><option value="24"' + jade.attr("selected", application.housingTime == 24, true, false) + '>Até dois anos</option><option value="60"' + jade.attr("selected", application.housingTime > 24, true, false) + ">Mais de dois anos</option></select></div></div>");
        }
        buf.push('<div class="col home-phone-column"><div class="label-container"><label>Telefone fixo*</label></div><div class="controls"><input autocomplete="off" type="tel" placeholder="Telefone de casa" data-validate="data-validate" name="homePhoneNumber" data-input-mask="(99) 9999 9999"' + jade.attr("value", application.homePhoneNumber, true, false) + ' data-validate-required="Preencha um número de telefone fixo"/></div></div><div class="col"><div class="label-container"><label>CEP*</label></div><div class="controls"><input autocomplete="off" type="tel" name="zipCode" placeholder="00000-000" data-validate="data-validate" data-input-mask="99999-999" data-validate-required="Preencha um CEP válido"' + jade.attr("value", application.zipCode, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Endereço (logradouro)*</label></div><div class="controls"><input type="text" name="address1" placeholder="Rua, Av, Praça, etc." data-validate="data-validate" data-validate-required="Informe o nome da rua, av, praça, etc."' + jade.attr("value", application.address1, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Número*</label></div><div class="controls"><input autocomplete="off" type="tel" name="streetNumber" data-validate="data-validate" data-validate-required="Número do endereço"' + jade.attr("value", application.streetNumber, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Complemento</label></div><div class="controls"><input type="text" name="address2" placeholder="Bloco, apartamento, etc."' + jade.attr("value", application.address2, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Bairro*</label></div><div class="controls"><input type="text" name="neighbourhood" placeholder="Nome do bairro ou distrito" data-validate="data-validate" data-validate-required="Informe o seu bairro"' + jade.attr("value", application.neighbourhood, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Cidade*</label></div><div class="controls"><input type="text" name="city" data-validate="data-validate" data-validate-required="Informe o nome da cidade"' + jade.attr("value", application.city, true, false) + '/></div></div><div class="col"><div class="label-container"><label>Estado*</label></div><div class="controls">');
        buf.push(templatizer["me"]["applications"]["view"]["state-editor"]("state", application.state));
        buf.push("</div></div></div></div>");
        return buf.join("");
    };


    // me/applications/view.jade:NetWorth compiled template
    templatizer["me"]["applications"]["view"]["NetWorth"] = function tmpl_me_applications_view_NetWorth(initialValue, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Necessário";
        var amountPatrimony = [ {
            code: "0",
            name: "Não possuo patrimônio"
        }, {
            code: "10000",
            name: "Até R$ 10 mil"
        }, {
            code: "50000",
            name: "Entre R$ 10 mil e R$ 50 mil"
        }, {
            code: "300000",
            name: "Entre R$ 50 mil e R$ 300 mil"
        }, {
            code: "500000",
            name: "Acima de R$ 300 mil"
        } ];
        buf.push('<div class="bank-network-editor"><select name="netWorth" data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + ">");
        (function() {
            var $obj = amountPatrimony;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var patrimony = $obj[$index];
                    buf.push("<option" + jade.attr("value", patrimony.code, true, false) + jade.attr("selected", initialValue == patrimony.code, true, false) + ">" + jade.escape((jade_interp = patrimony.name) == null ? "" : jade_interp) + "</option>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var patrimony = $obj[$index];
                    buf.push("<option" + jade.attr("value", patrimony.code, true, false) + jade.attr("selected", initialValue == patrimony.code, true, false) + ">" + jade.escape((jade_interp = patrimony.name) == null ? "" : jade_interp) + "</option>");
                }
            }
        }).call(this);
        buf.push("</select></div>");
        return buf.join("");
    };


    // me/applications/view.jade:IncomePaymentDay compiled template
    templatizer["me"]["applications"]["view"]["IncomePaymentDay"] = function tmpl_me_applications_view_IncomePaymentDay(initialValue, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Necessário";
        var days = [ {
            code: "01",
            name: "dia 01"
        }, {
            code: "05",
            name: "dia 05"
        }, {
            code: "10",
            name: "dia 10"
        }, {
            code: "30",
            name: "dia 30"
        } ];
        buf.push('<div class="income-payment-day-editor"><select name="incomePaymentDay" data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + '><option value="">Selecione...</option>');
        (function() {
            var $obj = days;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var day = $obj[$index];
                    buf.push("<option" + jade.attr("value", day.code, true, false) + jade.attr("selected", initialValue == day.code, true, false) + ">" + jade.escape((jade_interp = day.name) == null ? "" : jade_interp) + "</option>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var day = $obj[$index];
                    buf.push("<option" + jade.attr("value", day.code, true, false) + jade.attr("selected", initialValue == day.code, true, false) + ">" + jade.escape((jade_interp = day.name) == null ? "" : jade_interp) + "</option>");
                }
            }
        }).call(this);
        buf.push("</select></div>");
        return buf.join("");
    };


    // me/applications/view.jade:IncomePaymentMethod compiled template
    templatizer["me"]["applications"]["view"]["IncomePaymentMethod"] = function tmpl_me_applications_view_IncomePaymentMethod(initialValue, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Necessário";
        var options = [ {
            code: "cash",
            name: "Dinheiro vivo"
        }, {
            code: "check",
            name: "Cheque da empresa"
        }, {
            code: "direct_deposit",
            name: "Crédito em conta"
        }, {
            code: "debit_card",
            name: "Cartão salário"
        }, {
            code: "other",
            name: "Outros meios"
        } ];
        buf.push('<div class="payment-method-editor"><select name="incomePaymentMethod" data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + '><option value="">Selecione...</option>');
        (function() {
            var $obj = options;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var option = $obj[$index];
                    buf.push("<option" + jade.attr("value", option.code, true, false) + jade.attr("selected", initialValue == option.code, true, false) + ">" + jade.escape((jade_interp = option.name) == null ? "" : jade_interp) + "</option>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var option = $obj[$index];
                    buf.push("<option" + jade.attr("value", option.code, true, false) + jade.attr("selected", initialValue == option.code, true, false) + ">" + jade.escape((jade_interp = option.name) == null ? "" : jade_interp) + "</option>");
                }
            }
        }).call(this);
        buf.push("</select></div>");
        return buf.join("");
    };


    // me/applications/view.jade:intimacy-grade-editor compiled template
    templatizer["me"]["applications"]["view"]["intimacy-grade-editor"] = function tmpl_me_applications_view_intimacy_grade_editor(name, initialValue, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Selecione uma opção";
        var domainValues = [ {
            code: "friend",
            description: "Amiga ou amigo"
        }, {
            code: "parents",
            description: "Pai ou mãe"
        }, {
            code: "siblings",
            description: "Irmã ou irmão"
        }, {
            code: "relative",
            description: "Outros parentes"
        }, {
            code: "fiance",
            description: "Namorado ou Namorada"
        } ];
        buf.push('<div class="intimacy-grade-editor"><select' + jade.attr("name", name, true, false) + ' data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + '><option value="">Selecione</option>');
        (function() {
            var $obj = domainValues;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var dv = $obj[$index];
                    buf.push("<option" + jade.attr("value", dv.code, true, false) + jade.attr("selected", initialValue == dv.code, true, false) + ">" + jade.escape((jade_interp = dv.description) == null ? "" : jade_interp) + "</option>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var dv = $obj[$index];
                    buf.push("<option" + jade.attr("value", dv.code, true, false) + jade.attr("selected", initialValue == dv.code, true, false) + ">" + jade.escape((jade_interp = dv.description) == null ? "" : jade_interp) + "</option>");
                }
            }
        }).call(this);
        buf.push("</select></div>");
        return buf.join("");
    };


    // me/applications/view.jade:gender-editor compiled template
    templatizer["me"]["applications"]["view"]["gender-editor"] = function tmpl_me_applications_view_gender_editor(name, initialValue, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Escolha o gênero";
        var domainValues = [ {
            code: "f",
            description: "Feminino"
        }, {
            code: "m",
            description: "Masculino"
        } ];
        buf.push('<div class="gender-editor"><select' + jade.attr("name", name, true, false) + ' data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + '><option value="">Selecione</option>');
        (function() {
            var $obj = domainValues;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var dv = $obj[$index];
                    buf.push("<option" + jade.attr("value", dv.code, true, false) + jade.attr("selected", initialValue == dv.code, true, false) + ">" + jade.escape((jade_interp = dv.description) == null ? "" : jade_interp) + "</option>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var dv = $obj[$index];
                    buf.push("<option" + jade.attr("value", dv.code, true, false) + jade.attr("selected", initialValue == dv.code, true, false) + ">" + jade.escape((jade_interp = dv.description) == null ? "" : jade_interp) + "</option>");
                }
            }
        }).call(this);
        buf.push("</select></div>");
        return buf.join("");
    };


    // me/applications/view.jade:income-proof-document compiled template
    templatizer["me"]["applications"]["view"]["income-proof-document"] = function tmpl_me_applications_view_income_proof_document(name, initialValue, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Informe o tipo de comprovante de renda que será utilizado";
        var documents = [ {
            code: "statement",
            description: "Extrato Bancário"
        }, {
            code: "hol",
            description: "Holerite"
        }, {
            code: "previdence",
            description: "Extrato do INSS"
        }, {
            code: "priv-prev",
            description: "Extrato de Previdência Privada"
        }, {
            code: "prolabore",
            description: "Pró-labore"
        }, {
            code: "invoices",
            description: "Notas fiscais da minha empresa"
        } ];
        buf.push('<div class="income-proof-editor"><select' + jade.attr("name", name, true, false) + ' data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + '><option value="">Selecione</option>');
        (function() {
            var $obj = documents;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var doc = $obj[$index];
                    buf.push("<option" + jade.attr("value", doc.code, true, false) + jade.attr("selected", initialValue == doc.code, true, false) + ">" + jade.escape((jade_interp = doc.description) == null ? "" : jade_interp) + "</option>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var doc = $obj[$index];
                    buf.push("<option" + jade.attr("value", doc.code, true, false) + jade.attr("selected", initialValue == doc.code, true, false) + ">" + jade.escape((jade_interp = doc.description) == null ? "" : jade_interp) + "</option>");
                }
            }
        }).call(this);
        buf.push("</select></div>");
        return buf.join("");
    };


    // me/applications/view.jade:bank-account-editor compiled template
    templatizer["me"]["applications"]["view"]["bank-account-editor"] = function tmpl_me_applications_view_bank_account_editor(name, initialValue, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Digite o número da conta e, no outro espaço, o dígito de controle";
        buf.push('<div class="bank-account-editor"><input type="hidden"' + jade.attr("name", name, true, false) + jade.attr("value", initialValue, true, false) + '/><input autocomplete="off" type="tel"' + jade.attr("name", name + "_acc", true, false) + ' data-validate="data-validate" data-input-mask="9999999999"' + jade.attr("data-validate-required", message, true, false) + ' class="accno"/><input autocomplete="off" type="tel" data-validate="data-validate" data-input-mask="SS"' + jade.attr("data-validate-required", message, true, false) + ' class="accdig"/></div>');
        return buf.join("");
    };


    // me/applications/view.jade:bank-name-editor compiled template
    templatizer["me"]["applications"]["view"]["bank-name-editor"] = function tmpl_me_applications_view_bank_name_editor(name, initialValue, message, mandatory) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Necessário";
        var banks = [ {
            code: "001",
            name: "Banco do Brasil"
        }, {
            code: "041",
            name: "Banrisul"
        }, {
            code: "237",
            name: "Bradesco"
        }, {
            code: "070",
            name: "BRB - Banco de Brasília"
        }, {
            code: "104",
            name: "Caixa Economica Federal"
        }, {
            code: "745",
            name: "Citibank"
        }, {
            code: "021",
            name: "Banestes"
        }, {
            code: "037",
            name: "Banco do Estado do Pará"
        }, {
            code: "047",
            name: "Banco do Estado de Sergipe"
        }, {
            code: "077",
            name: "Banco Intermedium"
        }, {
            code: "208",
            name: "Banco BTG Pactual"
        }, {
            code: "341",
            name: "Itaú"
        }, {
            code: "243",
            name: "Banco Máxima"
        }, {
            code: "212",
            name: "Banco Original"
        }, {
            code: "254",
            name: "Paraná Banco"
        }, {
            code: "422",
            name: "Banco Safra"
        }, {
            code: "033",
            name: "Santander"
        }, {
            code: "748",
            name: "Sicredi"
        }, {
            code: "637",
            name: "Sofisa"
        } ];
        buf.push('<div class="bank-name-editor"><select' + jade.attr("name", name, true, false) + ' data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + '><option value="">Selecione...</option>');
        if (!mandatory) {
            buf.push('<option value="no">Não tenho conta em Banco</option>');
        }
        (function() {
            var $obj = banks;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var bank = $obj[$index];
                    buf.push("<option" + jade.attr("value", bank.code, true, false) + jade.attr("selected", initialValue == bank.code, true, false) + ">" + jade.escape((jade_interp = bank.name) == null ? "" : jade_interp) + "</option>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var bank = $obj[$index];
                    buf.push("<option" + jade.attr("value", bank.code, true, false) + jade.attr("selected", initialValue == bank.code, true, false) + ">" + jade.escape((jade_interp = bank.name) == null ? "" : jade_interp) + "</option>");
                }
            }
        }).call(this);
        buf.push("</select></div>");
        return buf.join("");
    };


    // me/applications/view.jade:account-type-editor compiled template
    templatizer["me"]["applications"]["view"]["account-type-editor"] = function tmpl_me_applications_view_account_type_editor(name, initialValue, required, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = required ? message || "Necessário" : undefined;
        var documents = [];
        buf.push('<div class="account-type-editor"><input type="hidden" id="init_val"' + jade.attr("value", initialValue, true, false) + "/><select" + jade.attr("name", name, true, false) + ' data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + ">");
        if (required) {
            buf.push('<option value="">Selecione...</option>');
        } else {
            buf.push('<option value="">Sem conta bancária</option>');
        }
        buf.push("</select></div>");
        return buf.join("");
    };


    // me/applications/view.jade:nationality-editor compiled template
    templatizer["me"]["applications"]["view"]["nationality-editor"] = function tmpl_me_applications_view_nationality_editor(name, initialValue, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Necessário";
        var countries = [ {
            code: "br",
            name: "Brasileira"
        }, {
            code: "ar",
            name: "Argentina"
        }, {
            code: "bo",
            name: "Boliviana"
        }, {
            code: "cl",
            name: "Chilena"
        }, {
            code: "ht",
            name: "Haitina"
        }, {
            code: "us",
            name: "Norte Americana (US)"
        }, {
            code: "py",
            name: "Paraguaia"
        }, {
            code: "pt",
            name: "Portuguesa"
        }, {
            code: "se",
            name: "Sueca"
        }, {
            code: "uy",
            name: "Uruguaia"
        }, {
            code: "ve",
            name: "Venezuela"
        }, {
            code: "other",
            name: "Outra"
        } ];
        buf.push("<select" + jade.attr("name", name, true, false) + ' data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + ">");
        (function() {
            var $obj = countries;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var country = $obj[$index];
                    buf.push("<option" + jade.attr("value", country.code, true, false) + jade.attr("selected", initialValue == country.code, true, false) + ">" + jade.escape((jade_interp = country.name) == null ? "" : jade_interp) + "</option>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var country = $obj[$index];
                    buf.push("<option" + jade.attr("value", country.code, true, false) + jade.attr("selected", initialValue == country.code, true, false) + ">" + jade.escape((jade_interp = country.name) == null ? "" : jade_interp) + "</option>");
                }
            }
        }).call(this);
        buf.push("</select>");
        return buf.join("");
    };


    // me/applications/view.jade:state-editor compiled template
    templatizer["me"]["applications"]["view"]["state-editor"] = function tmpl_me_applications_view_state_editor(name, initialValue, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Necessário";
        var states = [ "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO" ];
        buf.push("<select" + jade.attr("name", name, true, false) + ' data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + '><option value="">Selecionar</option>');
        (function() {
            var $obj = states;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var state = $obj[$index];
                    buf.push("<option" + jade.attr("value", state, true, false) + jade.attr("selected", initialValue == state, true, false) + ">" + jade.escape((jade_interp = state) == null ? "" : jade_interp) + "</option>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var state = $obj[$index];
                    buf.push("<option" + jade.attr("value", state, true, false) + jade.attr("selected", initialValue == state, true, false) + ">" + jade.escape((jade_interp = state) == null ? "" : jade_interp) + "</option>");
                }
            }
        }).call(this);
        buf.push("</select>");
        return buf.join("");
    };


    // me/applications/view.jade:loan-reason-editor compiled template
    templatizer["me"]["applications"]["view"]["loan-reason-editor"] = function tmpl_me_applications_view_loan_reason_editor(name, initialValue, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Escolha a razão de procurar esse empréstimo";
        var documents = [];
        buf.push('<div class="loan-reason-editor"><input type="hidden"' + jade.attr("name", name + "_init", true, false) + jade.attr("value", initialValue, true, false) + "/><select" + jade.attr("name", name, true, false) + ' data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + '><option value="">Selecionar</option></select></div>');
        return buf.join("");
    };


    // me/applications/view.jade:job-position-editor compiled template
    templatizer["me"]["applications"]["view"]["job-position-editor"] = function tmpl_me_applications_view_job_position_editor(name, initialValue, worksStatus, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Selecione um cargo ou profissão";
        var documents = [];
        buf.push('<div class="job-position-editor"><input type="hidden" id="init_val"' + jade.attr("value", initialValue, true, false) + '/><input type="hidden" id="filter"' + jade.attr("value", worksStatus, true, false) + "/><select" + jade.attr("name", name, true, false) + ' data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + '><option value="">Selecionar</option></select></div>');
        return buf.join("");
    };


    // me/applications/view.jade:construction-type-editor compiled template
    templatizer["me"]["applications"]["view"]["construction-type-editor"] = function tmpl_me_applications_view_construction_type_editor(name, initialValue, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Escolha o tipo de imóvel que será usado em garantia";
        var documents = [];
        buf.push('<div class="construction-type-editor"><input type="hidden"' + jade.attr("name", name + "_init", true, false) + jade.attr("value", initialValue, true, false) + "/><select" + jade.attr("name", name, true, false) + ' data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + '><option value="">Selecionar</option></select></div>');
        return buf.join("");
    };


    // me/applications/view.jade:property-type-editor compiled template
    templatizer["me"]["applications"]["view"]["property-type-editor"] = function tmpl_me_applications_view_property_type_editor(name, initialValue, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Escolha o tipo de imóvel que será usado em garantia";
        var documents = [];
        buf.push('<div class="property-type-editor"><input type="hidden"' + jade.attr("name", name + "_init", true, false) + jade.attr("value", initialValue, true, false) + "/><select" + jade.attr("name", name, true, false) + ' data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + '><option value="">Selecionar</option></select></div>');
        return buf.join("");
    };


    // me/applications/view.jade:rg-expeditor-organization compiled template
    templatizer["me"]["applications"]["view"]["rg-expeditor-organization"] = function tmpl_me_applications_view_rg_expeditor_organization(name, initialValue, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Escolha o nome do órgão emissor do seu documento";
        var documents = [ {
            code: "ssp",
            description: "SSP"
        }, {
            code: "detran",
            description: "DETRAN"
        }, {
            code: "pf",
            description: "Polícia Federal"
        }, {
            code: "maer",
            description: "Aeronáutica"
        }, {
            code: "mex",
            description: "Exército"
        }, {
            code: "mman",
            description: "Marinha"
        } ];
        buf.push('<div class="rg-expeditor-organization-editor"><select' + jade.attr("name", name, true, false) + ' data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + '><option value="">Selecione</option>');
        (function() {
            var $obj = documents;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var doc = $obj[$index];
                    buf.push("<option" + jade.attr("value", doc.code, true, false) + jade.attr("selected", initialValue == doc.code, true, false) + ">" + jade.escape((jade_interp = doc.description) == null ? "" : jade_interp) + "</option>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var doc = $obj[$index];
                    buf.push("<option" + jade.attr("value", doc.code, true, false) + jade.attr("selected", initialValue == doc.code, true, false) + ">" + jade.escape((jade_interp = doc.description) == null ? "" : jade_interp) + "</option>");
                }
            }
        }).call(this);
        buf.push("</select></div>");
        return buf.join("");
    };


    // me/applications/view.jade:document-type-editor compiled template
    templatizer["me"]["applications"]["view"]["document-type-editor"] = function tmpl_me_applications_view_document_type_editor(name, initialValue, message) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        message = message || "Necessário";
        buf.push('<div class="document-type-editor">');
        var docTypes = [ {
            code: "rg",
            name: "RG"
        }, {
            code: "driver",
            name: "CNH"
        }, {
            code: "professionalcouncil",
            name: "Carteira de Conselho Profissional"
        }, {
            code: "rne",
            name: "RNE"
        }, {
            code: "passport",
            name: "Passaporte"
        }, {
            code: "id",
            name: "Outro documento de identidade"
        } ];
        buf.push("<select" + jade.attr("name", name, true, false) + ' data-validate="data-validate"' + jade.attr("value", initialValue, true, false) + jade.attr("data-validate-required", message, true, false) + ">");
        (function() {
            var $obj = docTypes;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var doc = $obj[$index];
                    buf.push("<option" + jade.attr("value", doc.code, true, false) + jade.attr("selected", initialValue == doc.code, true, false) + ">" + jade.escape((jade_interp = doc.name) == null ? "" : jade_interp) + "</option>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var doc = $obj[$index];
                    buf.push("<option" + jade.attr("value", doc.code, true, false) + jade.attr("selected", initialValue == doc.code, true, false) + ">" + jade.escape((jade_interp = doc.name) == null ? "" : jade_interp) + "</option>");
                }
            }
        }).call(this);
        buf.push("</select></div>");
        return buf.join("");
    };


    // me/applications/view.jade:radio-button-editor compiled template
    templatizer["me"]["applications"]["view"]["radio-button-editor"] = function tmpl_me_applications_view_radio_button_editor(name, validadeMessage, value_first, text_first, checked_first, value_second, text_second, checked_second) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="input-container"><label class="radio inline"><input' + jade.attr("id", name + "-false", true, false) + ' type="radio"' + jade.attr("name", name, true, false) + jade.attr("value", value_first, true, false) + ' data-validate="data-validate"' + jade.attr("data-validate-required", validadeMessage, true, false) + jade.attr("checked", checked_first, true, false) + "/><span>" + jade.escape((jade_interp = text_first) == null ? "" : jade_interp) + '</span></label><label class="radio inline"><input' + jade.attr("id", name + "-true", true, false) + ' type="radio"' + jade.attr("name", name, true, false) + jade.attr("value", value_second, true, false) + jade.attr("checked", checked_second, true, false) + "/><span>" + jade.escape((jade_interp = text_second) == null ? "" : jade_interp) + "</span></label></div>");
        return buf.join("");
    };


    // me/applications/view.jade:month-editor compiled template
    templatizer["me"]["applications"]["view"]["month-editor"] = function tmpl_me_applications_view_month_editor(name, value, initialYear, validadeMessage) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.attr("data-initial-year", initialYear || new Date().getFullYear(), true, false) + ' class="month-editor"><input type="hidden"' + jade.attr("name", name, true, false) + jade.attr("value", value, true, false) + '/><select data-validate="data-validate"' + jade.attr("data-validate-required", validadeMessage, true, false) + ' class="month"></select><select data-validate="data-validate"' + jade.attr("data-validate-required", validadeMessage, true, false) + ' class="year"></select></div>');
        return buf.join("");
    };


    // me/applications/view.jade:date-editor compiled template
    templatizer["me"]["applications"]["view"]["date-editor"] = function tmpl_me_applications_view_date_editor(name, value, initialYear, validadeMessage) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.attr("data-initial-year", initialYear || new Date().getFullYear(), true, false) + ' class="date-editor"><input type="hidden"' + jade.attr("name", name, true, false) + jade.attr("value", value, true, false) + '/><select data-validate="data-validate"' + jade.attr("data-validate-required", validadeMessage, true, false) + ' class="day"></select><select data-validate="data-validate"' + jade.attr("data-validate-required", validadeMessage, true, false) + ' class="month"></select><select data-validate="data-validate"' + jade.attr("data-validate-required", validadeMessage, true, false) + ' class="year"></select></div>');
        return buf.join("");
    };


    // me/applications/view.jade:year-editor compiled template
    templatizer["me"]["applications"]["view"]["year-editor"] = function tmpl_me_applications_view_year_editor(name, value, futureyears, pastyears, disabled) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="year-editor">');
        var year = new Date().getFullYear();
        futureyears = futureyears | 0;
        var inityear = pastyears ? year - pastyears : 1901;
        year = year + futureyears;
        buf.push("<select" + jade.attr("name", name, true, false) + ' data-validate="data-validate" data-validate-required="Necessário"' + jade.attr("disabled", disabled, true, false) + '><option value="">Selecionar ano</option>');
        while (year >= inityear) {
            buf.push("<option" + jade.attr("value", year, true, false) + jade.attr("selected", year == value, true, false) + ">" + jade.escape((jade_interp = year) == null ? "" : jade_interp) + "</option>");
            year--;
        }
        buf.push("</select></div>");
        return buf.join("");
    };


    // me/applications/view.jade:application-details compiled template
    templatizer["me"]["applications"]["view"]["application-details"] = function tmpl_me_applications_view_application_details(application) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="application-details"><h2>Seu Pedido de Crédito</h2><div class="details-columns"><div class="details-column-double time-left"><label>Tempo restante</label><div' + jade.attr("data-to", application.auction.endDate, true, false) + ' class="time-countdown"> </div></div><div class="details-column"><label>Valor solicitado</label>');
        if (application.appliedAmount > 0) {
            buf.push("<h3>" + jade.escape((jade_interp = numeral(application.appliedAmount).format("$ 0,0")) == null ? "" : jade_interp) + " </h3>");
        } else if (application.vehicleSecurity != null && application.vehicleSecurity.value > 0) {
            buf.push("<h3>" + jade.escape((jade_interp = numeral(application.vehicleSecurity.value).format("$ 0,0")) == null ? "" : jade_interp) + " </h3>");
        } else {
            buf.push("<h3>--</h3>");
        }
        buf.push("</div>");
        if (application.loanPeriodInMonths) {
            buf.push('<div class="details-column"><label>Prazo solicitado</label><h3>' + jade.escape((jade_interp = application.loanPeriodInMonths) == null ? "" : jade_interp) + " meses</h3></div>");
        } else {
            buf.push('<div class="details-column"><label>Prazo solicitado</label><h3>' + jade.escape((jade_interp = application.loanPeriodInYears) == null ? "" : jade_interp) + " anos</h3></div>");
        }
        buf.push('<div class="details-column-double"><label>Tempo restante</label><div' + jade.attr("data-to", application.auction.endDate, true, false) + ' class="time-countdown"> </div></div><div class="details-column"><label>CPF</label><h3>' + jade.escape((jade_interp = application.personalNumber) == null ? "" : jade_interp) + ' </h3></div><div class="details-column"><label>Cônjuge</label>');
        if (application.hasCoApplicant) {
            buf.push("<h3>" + jade.escape((jade_interp = application.coApplicantFirstName) == null ? "" : jade_interp) + " " + jade.escape((jade_interp = application.coApplicantLastName) == null ? "" : jade_interp) + "</h3>");
        } else {
            buf.push("<h3>N/A</h3>");
        }
        buf.push("</div></div></div>");
        return buf.join("");
    };


    // me/applications/view.jade:me-nav compiled template
    templatizer["me"]["applications"]["view"]["me-nav"] = function tmpl_me_applications_view_me_nav(locals) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="top-nav main-nav"><div class="top-nav-left"><div class="top-nav-logo"><a href="/"><div class="logo-image-container"><img src="/images/logo.png"/></div></a></div></div><div class="top-nav-center"><span>&nbsp;</span></div><div class="top-nav-right"><div class="top-nav-login"><div class="logged-in"> ');
        if (locals.user) {
            buf.push("<span>" + jade.escape((jade_interp = locals.user.email) == null ? "" : jade_interp) + "</span>");
        }
        buf.push('</div><div class="logout-link"><a href="/logout"><i class="fa fa-sign-out"></i>Sair</a></div></div></div></nav>');
        return buf.join("");
    };

    // me/index.jade compiled template
    templatizer["me"]["index"] = function tmpl_me_index(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(applicationHumanFormatter, applications, countActiveBids, diffDates, foundCar, foundCp, foundFin, foundHome, moment, showAlertAppDisabled, undefined) {
            buf.push('<div class="me-site-layout">');
            buf.push(templatizer["me"]["index"]["me-nav"](locals));
            buf.push('<div class="content-container">');
            var cp = null;
            var home = null;
            var car = null;
            var fin = null;
            buf.push('<div class="public-site-layout"><div class="me-index"><h2>Seus Pedidos de Crédito Recentes</h2><div class="aplications-status"><div class="row header"> </div>');
            (function() {
                var $obj = applications;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var application = $obj[$index];
                        if (diffDates(application.created) < 60) {
                            buf.push("<!--set diff dates-->");
                            if (application.securityType == "no-security") {
                                cp = diffDates(application.created);
                            }
                            if (application.securityType == "home") {
                                home = diffDates(application.created);
                            }
                            if (application.securityType == "car" && application.securityIsOwned === true) {
                                car = diffDates(application.created);
                            }
                            if (application.securityType == "car" && application.securityIsOwned === false) {
                                fin = diffDates(application.created);
                            }
                            buf.push('<div class="row application-data"><div class="col created"> <span class="label-tbl">Data<br></span><span>' + jade.escape((jade_interp = moment(application.created).format("D/MM")) == null ? "" : jade_interp) + '</span></div><div class="col product"><span class="label-tbl">Tipo<br></span><span>' + jade.escape((jade_interp = applicationHumanFormatter(application, "productName")) == null ? "" : jade_interp) + '</span></div><div class="col amount"><span class="label-tbl">Valor <br>                            </span><span>' + jade.escape((jade_interp = applicationHumanFormatter(application, "appliedAmount")) == null ? "" : jade_interp) + '</span></div><div class="col status1"><span class="label-tbl">Status <br></span>');
                            if (application.applicationState > 2 || application.uiState && application.uiState.hasCompletedApplication) {
                                if (application.applicationState == 16) {
                                    if (application.closedReason === "customer-rejected") {
                                        buf.push('<td class="status-column">Pedido encerrado - Você recusou esta proposta.</td>');
                                    } else if (application.closedReason === "duplicated") {
                                        buf.push('<td class="status-column">Cancelada - O seu pedido foi encerrado por duplicidade.</td>');
                                    } else if (application.closedReason === "customer-rejected-installment") {
                                        buf.push('<td class="status-column">Pedido encerrado - A simulação não atendeu as expectativas.</td>');
                                    } else {
                                        buf.push('<td class="status-column">Pedido não aprovado - O seu pedido não foi aceito nos critérios da FinanZero, mas temos um parceiro que pode te ajudar.</td>');
                                    }
                                } else if (application.applicationState == 64) {
                                    buf.push('<td class="status-column">Pedido arquivado</td>');
                                } else if (application.applicationState == 4 || application.applicationState == 8 && countActiveBids(application) == 0) {
                                    buf.push('<td class="status-column">Pedido em análise. Aguarde nosso contato com novidades!</td>');
                                } else if (application.applicationState == 8) {
                                    buf.push('<td class="status-column">Ótima notícia. Você tem uma pré-aprovação!</td>');
                                } else if (application.applicationState == 32) {
                                    buf.push('<td class="status-column">Proposta aceita! <br/>Confira o seu email com as instruções para finalizar o seu pedido</td>');
                                } else if (application.applicationState == 128) {
                                    buf.push('<td class="status-column">Dinheiro na conta! Quando precisar, conte com a FinanZero.</td>');
                                } else {
                                    buf.push('<td class="status-column">Em processamento. Em breve entraremos em contato.</td>');
                                }
                            } else {
                                buf.push('<td class="button">Pedido Incompleto - Precisamos de mais informações para apresentar a você opções de crédito.</td>');
                            }
                            buf.push('</div><div class="col acoes"><span class="label-tbl"><br></span>');
                            if (application.applicationState > 2 || application.uiState && application.uiState.hasCompletedApplication) {
                                if (application.applicationState == 16) {
                                    if (application.closedReason === "customer-rejected") {} else {
                                        buf.push('<td class="status-column"> <a href="http://bit.ly/SimplicStatus" target="_blank" class="btn small primary">Empréstimo Simplic</a></td>');
                                    }
                                } else if (application.applicationState == 64) {
                                    buf.push('<td class="status-column">Pedido arquivado</td>');
                                } else if (application.applicationState == 4 || application.applicationState == 8 && countActiveBids(application) == 0) {
                                    buf.push('<td class="status-column"> <a' + jade.attr("href", "/me/applications/" + application.id, true, false) + ' class="btn small">Ver detalhes</a></td>');
                                } else if (application.applicationState == 8) {
                                    buf.push('<td class="status-column"> <a' + jade.attr("href", "/me/applications/" + application.id, true, false) + ' class="btn small">Ver a oferta                                </a></td>');
                                } else {
                                    buf.push('<td class="status-column"> </td>');
                                }
                            } else {
                                buf.push('<td class="button"> <a' + jade.attr("href", "/me/applications/" + application.id, true, false) + ' class="btn small primary">Complete seu Cadastro                        </a></td>');
                            }
                            buf.push("</div></div>");
                        }
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var application = $obj[$index];
                        if (diffDates(application.created) < 60) {
                            buf.push("<!--set diff dates-->");
                            if (application.securityType == "no-security") {
                                cp = diffDates(application.created);
                            }
                            if (application.securityType == "home") {
                                home = diffDates(application.created);
                            }
                            if (application.securityType == "car" && application.securityIsOwned === true) {
                                car = diffDates(application.created);
                            }
                            if (application.securityType == "car" && application.securityIsOwned === false) {
                                fin = diffDates(application.created);
                            }
                            buf.push('<div class="row application-data"><div class="col created"> <span class="label-tbl">Data<br></span><span>' + jade.escape((jade_interp = moment(application.created).format("D/MM")) == null ? "" : jade_interp) + '</span></div><div class="col product"><span class="label-tbl">Tipo<br></span><span>' + jade.escape((jade_interp = applicationHumanFormatter(application, "productName")) == null ? "" : jade_interp) + '</span></div><div class="col amount"><span class="label-tbl">Valor <br>                            </span><span>' + jade.escape((jade_interp = applicationHumanFormatter(application, "appliedAmount")) == null ? "" : jade_interp) + '</span></div><div class="col status1"><span class="label-tbl">Status <br></span>');
                            if (application.applicationState > 2 || application.uiState && application.uiState.hasCompletedApplication) {
                                if (application.applicationState == 16) {
                                    if (application.closedReason === "customer-rejected") {
                                        buf.push('<td class="status-column">Pedido encerrado - Você recusou esta proposta.</td>');
                                    } else if (application.closedReason === "duplicated") {
                                        buf.push('<td class="status-column">Cancelada - O seu pedido foi encerrado por duplicidade.</td>');
                                    } else if (application.closedReason === "customer-rejected-installment") {
                                        buf.push('<td class="status-column">Pedido encerrado - A simulação não atendeu as expectativas.</td>');
                                    } else {
                                        buf.push('<td class="status-column">Pedido não aprovado - O seu pedido não foi aceito nos critérios da FinanZero, mas temos um parceiro que pode te ajudar.</td>');
                                    }
                                } else if (application.applicationState == 64) {
                                    buf.push('<td class="status-column">Pedido arquivado</td>');
                                } else if (application.applicationState == 4 || application.applicationState == 8 && countActiveBids(application) == 0) {
                                    buf.push('<td class="status-column">Pedido em análise. Aguarde nosso contato com novidades!</td>');
                                } else if (application.applicationState == 8) {
                                    buf.push('<td class="status-column">Ótima notícia. Você tem uma pré-aprovação!</td>');
                                } else if (application.applicationState == 32) {
                                    buf.push('<td class="status-column">Proposta aceita! <br/>Confira o seu email com as instruções para finalizar o seu pedido</td>');
                                } else if (application.applicationState == 128) {
                                    buf.push('<td class="status-column">Dinheiro na conta! Quando precisar, conte com a FinanZero.</td>');
                                } else {
                                    buf.push('<td class="status-column">Em processamento. Em breve entraremos em contato.</td>');
                                }
                            } else {
                                buf.push('<td class="button">Pedido Incompleto - Precisamos de mais informações para apresentar a você opções de crédito.</td>');
                            }
                            buf.push('</div><div class="col acoes"><span class="label-tbl"><br></span>');
                            if (application.applicationState > 2 || application.uiState && application.uiState.hasCompletedApplication) {
                                if (application.applicationState == 16) {
                                    if (application.closedReason === "customer-rejected") {} else {
                                        buf.push('<td class="status-column"> <a href="http://bit.ly/SimplicStatus" target="_blank" class="btn small primary">Empréstimo Simplic</a></td>');
                                    }
                                } else if (application.applicationState == 64) {
                                    buf.push('<td class="status-column">Pedido arquivado</td>');
                                } else if (application.applicationState == 4 || application.applicationState == 8 && countActiveBids(application) == 0) {
                                    buf.push('<td class="status-column"> <a' + jade.attr("href", "/me/applications/" + application.id, true, false) + ' class="btn small">Ver detalhes</a></td>');
                                } else if (application.applicationState == 8) {
                                    buf.push('<td class="status-column"> <a' + jade.attr("href", "/me/applications/" + application.id, true, false) + ' class="btn small">Ver a oferta                                </a></td>');
                                } else {
                                    buf.push('<td class="status-column"> </td>');
                                }
                            } else {
                                buf.push('<td class="button"> <a' + jade.attr("href", "/me/applications/" + application.id, true, false) + ' class="btn small primary">Complete seu Cadastro                        </a></td>');
                            }
                            buf.push("</div></div>");
                        }
                    }
                }
            }).call(this);
            buf.push('</div></div><div class="fit-position"><h2>Conheça nossos produtos</h2></div><div class="section options">            ');
            if (cp < 30 && cp !== null) {
                foundCp = true;
                {
                    buf.push('<button onclick="showModalMeDisabled(\'cp\')" class="btn btn-product-size cinza-disabled"><i class="fa fa-money fa-3x"></i><div class="div-tx">Empréstimo Pessoal</div></button>');
                }
            } else if (foundCp !== true) {
                buf.push('<button onclick="showModalMe(\'cp\') " class="btn primary btn-product-size"> <i class="fa fa-money fa-3x"></i><div class="div-tx">Empréstimo Pessoal</div></button>');
            }
            if (fin < 30 && fin !== null) {
                foundFin = true;
                buf.push('<button onclick="showModalMeDisabled(\'fin\')" class="btn btn-product-size cinza-disabled"><i class="fa fa-car fa-3x"> </i><div class="div-tx">Financiamento de veículo</div></button>');
            } else if (foundFin !== true) {
                buf.push('<button onclick="showModalMe(\'fin\') " class="btn primary btn-product-size"> <i class="fa fa-car fa-3x"></i><div class="div-tx">Financiamento de veículo</div></button>');
            }
            if (car < 30 && car !== null) {
                foundCar = true;
                buf.push('<button onclick="showModalMeDisabled(\'car\')" class="btn btn-product-size cinza-disabled"><image src="/images/icon-refin-g.png" width="41" height="41" class="icon-btn"></image><div class="div-tx-refin">Refinanciamento de veículo</div></button>');
            } else if (foundCar !== true) {
                buf.push('<button onclick="showModalMe(\'car\') " class="btn primary btn-product-size"> <image src="/images/icon-refin-w.png" width="41" height="41" class="icon-btn"></image><div class="div-tx-refin">Refinanciamento de veículo</div></button>');
            }
            if (home < 30 && home !== null) {
                foundHome = true;
                buf.push('<button onclick="showModalMeDisabled(\'home\')" class="btn btn-product-size cinza-disabled"><i class="fa fa-home fa-3x"> </i><div class="div-tx">Refinanciamento de imóvel</div></button>');
            } else if (foundHome !== true) {
                buf.push('<button onclick="showModalMe(\'home\') " class="btn primary btn-product-size"> <i class="fa fa-home fa-3x"> </i><div class="div-tx">Refinanciamento de imóvel</div></button>');
            }
            buf.push('</div><div class="more-details">');
            buf.push(templatizer["me"]["index"]["faq_customers_logged"]());
            buf.push('</div><div class="footer-container">');
            buf.push(templatizer["me"]["index"]["footer"]());
            buf.push('</div><div class="modal-cp"><div class="text-modal-me"> <span class="text-modal">O empréstimo pessoal é ideal para quem precisa de dinheiro rápido para resolver imprevistos ou investir em um projeto em andamento.</span></div><button type="button" id="ok-modal-cp" onclick="setFormType(\'cp\')" class="btn btn-large ok-me"><span>Pedir agora </span></button></div><div class="modal-fin"><div class="text-modal-me"> <span class="text-modal">O financiamento de veículo é uma forma conveniente para você comprar um carro ou caminhão usado ou seminovo.Você precisa dos dados do carro que escolheu comprar como placa, ano e modelo para fazer o seu pedido.</span></div><button type="button" id="ok-modal-fin" onclick="setFormType(\'fin\')" class="btn btn-large ok-me"><span>Pedir agora </span></button></div><div class="modal-car"><div class="text-modal-me"> <span class="text-modal">No refinanciamento de veículo você usa o seu carro ou caminhão como garantia do empréstimo e consegue taxas menores do que o crédito pessoal. Você tem toda liberdade para usar seu veículo enquanto paga seu emprestimo.</span></div><button type="button" id="ok-modal-car" onclick="setFormType(\'car\')" class="btn btn-large ok-me">           <span>Pedir agora            </span></button></div><div class="modal-home"><div class="text-modal-me"> <span class="text-modal">No refinanciamento de imóvel você usa a sua casa ou sala comercial como garantia do empréstimo e consegue as menores taxas do mercado.</span></div><button type="button" id="ok-modal-home" onclick="setFormType(\'home\')" class="btn btn-large ok-me"><span>Pedir agora </span></button></div><div class="modal-cp-disabled"><div class="text-modal-me"> <span class="text-modal">Você solicitou um Emprestimo Pessoal recentemente, tente novamente em ' + jade.escape((jade_interp = showAlertAppDisabled(cp)) == null ? "" : jade_interp) + ' dias ou selecione outro produto.</span></div><button type="button" id="ok-modal-home" onclick="$(\'.modal-cp-disabled\').iziModal(\'close\');" class="ok-me btn btn-large"><span>OK </span></button></div><div class="modal-fin-disabled"><div class="text-modal-me"> <span class="text-modal">Você solicitou um Financiamento de Veículo recentemente, tente novamente em ' + jade.escape((jade_interp = showAlertAppDisabled(fin)) == null ? "" : jade_interp) + ' dias ou selecione outro produto.</span></div><button type="button" id="ok-modal-cp" onclick="$(\'.modal-fin-disabled\').iziModal(\'close\');" class="btn btn-large ok-me"><span>OK </span></button></div><div class="modal-car-disabled"><div class="text-modal-me"> <span class="text-modal">Você solicitou um Refinanciamento de Veículo recentemente, tente novamente em ' + jade.escape((jade_interp = showAlertAppDisabled(car)) == null ? "" : jade_interp) + ' dias ou selecione outro produto.</span></div><button type="button" id="ok-modal-cp" onclick="$(\'.modal-car-disabled\').iziModal(\'close\');" class="btn btn-large ok-me"><span>OK </span></button></div><div class="modal-home-disabled"><div class="text-modal-me"> <span class="text-modal">Você solicitou um Refinanciamento de Imóvel recentemente, tente novamente em ' + jade.escape((jade_interp = showAlertAppDisabled(home)) == null ? "" : jade_interp) + ' dias ou selecione outro produto.</span></div><button type="button" id="ok-modal-cp" onclick="$(\'.modal-home-disabled\').iziModal(\'close\');" class="btn btn-large ok-me"><span>OK </span></button></div></div></div></div>');
        }).call(this, "applicationHumanFormatter" in locals_for_with ? locals_for_with.applicationHumanFormatter : typeof applicationHumanFormatter !== "undefined" ? applicationHumanFormatter : undefined, "applications" in locals_for_with ? locals_for_with.applications : typeof applications !== "undefined" ? applications : undefined, "countActiveBids" in locals_for_with ? locals_for_with.countActiveBids : typeof countActiveBids !== "undefined" ? countActiveBids : undefined, "diffDates" in locals_for_with ? locals_for_with.diffDates : typeof diffDates !== "undefined" ? diffDates : undefined, "foundCar" in locals_for_with ? locals_for_with.foundCar : typeof foundCar !== "undefined" ? foundCar : undefined, "foundCp" in locals_for_with ? locals_for_with.foundCp : typeof foundCp !== "undefined" ? foundCp : undefined, "foundFin" in locals_for_with ? locals_for_with.foundFin : typeof foundFin !== "undefined" ? foundFin : undefined, "foundHome" in locals_for_with ? locals_for_with.foundHome : typeof foundHome !== "undefined" ? foundHome : undefined, "moment" in locals_for_with ? locals_for_with.moment : typeof moment !== "undefined" ? moment : undefined, "showAlertAppDisabled" in locals_for_with ? locals_for_with.showAlertAppDisabled : typeof showAlertAppDisabled !== "undefined" ? showAlertAppDisabled : undefined, "undefined" in locals_for_with ? locals_for_with.undefined : typeof undefined !== "undefined" ? undefined : undefined);
        return buf.join("");
    };

    // me/index.jade:footer compiled template
    templatizer["me"]["index"]["footer"] = function tmpl_me_index_footer() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="footer"><div class="footer-inner"><div class="footer-logo-container"><div class="footer-logo"><img src="/images/new-logo-footer.png"/></div><div class="security-section"><div id="DigiCertClickID_9hlvA_e5" data-language="pt" class="certisign-seal"><!-- a(href="https://www.digicert.com/ssl-certificate.htm") SSL Certificates--></div></div></div></div><div class="footer-inner"><div class="footer-section"><p>FinanZero Brasil Serviços Online Ltda. CNPJ/MF 23.722.194/0001-34<br/>Av. Paulista, 1499, Conj. 2110 – São Paulo, SP - CEP: 01311-200<a href="tel:0800 607-3001"><i class="fa fa-phone"></i>0800 607-3001</a></p></div></div><div class="footer-inner"><div class="footer-legal"><p class="small">A FinanZero é uma empresa intermediadora do processo de concessão de financiamento veicular entre bancos e clientes. Nós negociamos o seu financiamento com os bancos para buscar as melhores taxas do mercado. Não somos uma instituição financeira. Somos correspondentes bancários, regulamentados pela lei 3.954/11 do Banco Central do Brasil.<script>var __dcid = __dcid || [];\n__dcid.push(["DigiCertClickID_9hlvA_e5", "3", "m", "black", "9hlvA_e5"]);\n(function(){var cid=document.createElement("script");\ncid.async=true;\ncid.src="//seal.digicert.com/seals/cascade/seal.min.js";\nvar s = document.getElementsByTagName("script");\nvar ls = s[(s.length - 1)];ls.parentNode.insertBefore(cid, ls.nextSibling);}());</script></p></div></div></div>');
        return buf.join("");
    };


    // me/index.jade:faq_customers_logged compiled template
    templatizer["me"]["index"]["faq_customers_logged"] = function tmpl_me_index_faq_customers_logged() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="faq_customers_logged"><h2>Perguntas mais frequentes</h2><ul><li><h4>Quais são as possíveis respostas ao meu pedido?</h4><p><strong> Pedido Incompleto </strong> - Precisamos de mais informações sobre você. Complete seu cadastro no botão em destaque para que possamos buscar as melhores opções de crédito disponíveis.</p><p><strong> Pedido em análise </strong> - O pedido foi preenchido completamente e nossos parceiros estão analisando suas chances de aprovação.</p><p><strong> Pedido não aprovado </strong> - O seu pedido não foi aprovado pelos critérios da FinanZero, mas temos um parceiro que pode te ajudar, a Simplic.</p></li><li><h4>Estou negativado, tenho alguma opção de empréstimo?</h4><a href="http://bit.ly/SimplicEmail"><strong> Sim! Peça aqui.</strong></a><p>Nós temos uma parceira que pode ajudar você. A Simplic tem empréstimo com contratação online e sem filas.</p><p>O parcelamento pode ser em até 12 vezes e o dinheiro é disponibilizado na conta em até 48h após a aprovação.</p></li><li><h4>Como funciona a Simplic?</h4><p>A Simplic oferece empréstimos pessoais online de até R$3.500, sem burocracia. <a href=\'http://bit.ly/SimplicEmail\'>Entre neste site</a>, selecione o valor e quantidade de parcelas, informe seus dados pessoais, inclusive os dados bancários.</p><p>A Simplic irá revisar seu pedido e caso seja aprovado entrará em contato com você e o dinheiro será creditado direto em sua conta bancária.</p></li></ul></div>');
        return buf.join("");
    };


    // me/index.jade:me-nav compiled template
    templatizer["me"]["index"]["me-nav"] = function tmpl_me_index_me_nav(locals) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="top-nav main-nav"><div class="top-nav-left"><div class="top-nav-logo"><a href="/"><div class="logo-image-container"><img src="/images/logo.png"/></div></a></div></div><div class="top-nav-center"><span>&nbsp;</span></div><div class="top-nav-right"><div class="top-nav-login"><div class="logged-in"> ');
        if (locals.user) {
            buf.push("<span>" + jade.escape((jade_interp = locals.user.email) == null ? "" : jade_interp) + "</span>");
        }
        buf.push('</div><div class="logout-link"><a href="/logout"><i class="fa fa-sign-out"></i>Sair</a></div></div></div></nav>');
        return buf.join("");
    };

    // me/newapplication.jade compiled template
    templatizer["me"]["newapplication"] = function tmpl_me_newapplication(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(Date, JSON, String, application, sessionStorage, window) {
            buf.push('<div class="me-site-layout">');
            buf.push(templatizer["me"]["newapplication"]["me-nav"](locals));
            buf.push('<div class="content-container">');
            if (sessionStorage.getItem("formType") === undefined || sessionStorage.getItem("formType") === null) {
                window.location.href = "/me";
            }
            buf.push('<div class="outer-container"><div class="main-left">');
            buf.push(templatizer["me"]["newapplication"]["start-page-intro"]());
            buf.push('</div><div class="main-right">');
            buf.push(templatizer["me"]["newapplication"]["application-form"](null, JSON.parse(sessionStorage.getItem("formType")), application));
            buf.push("</div></div></div></div>");
        }).call(this, "Date" in locals_for_with ? locals_for_with.Date : typeof Date !== "undefined" ? Date : undefined, "JSON" in locals_for_with ? locals_for_with.JSON : typeof JSON !== "undefined" ? JSON : undefined, "String" in locals_for_with ? locals_for_with.String : typeof String !== "undefined" ? String : undefined, "application" in locals_for_with ? locals_for_with.application : typeof application !== "undefined" ? application : undefined, "sessionStorage" in locals_for_with ? locals_for_with.sessionStorage : typeof sessionStorage !== "undefined" ? sessionStorage : undefined, "window" in locals_for_with ? locals_for_with.window : typeof window !== "undefined" ? window : undefined);
        return buf.join("");
    };

    // me/newapplication.jade:application-form compiled template
    templatizer["me"]["newapplication"]["application-form"] = function tmpl_me_newapplication_application_form(title, preselects, previousapplication) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        if (preselects !== null && preselects.defaultForm != true) {
            title = title || "O que você precisa?";
        } else {
            title = title || "";
        }
        preselects = preselects || {};
        previousapplication = previousapplication || {};
        buf.push('<form class="application-form"><!-- Used to ensure concurrency--><input type="hidden" name="revision"/><input type="hidden" name="has-preselection"' + jade.attr("value", String(preselects.securityType !== undefined), true, false) + '/><input type="hidden" name="previous-application-id"' + jade.attr("value", previousapplication.id, true, false) + '/><input type="hidden" name="home-equity"' + jade.attr("value", String(preselects.securityType === "home"), true, false) + "/><h2>" + jade.escape(null == (jade_interp = title) ? "" : jade_interp) + "</h2>");
        if (preselects.securityType === "home") {
            buf.push("<h4>O dinheiro que você precisa com as menores taxas</h4>");
        }
        buf.push('<div class="sections"><!-- Product type selector--><div class="section product-selection hide"><label class="radio inline"><input id="security-is-owned-true" type="radio" name="securityIsOwned" value="true"' + jade.attr("checked", preselects.securityIsOwned == true, true, false) + ' data-validate="data-validate" data-validate-required="Escolha uma das opções"/><span class="label-for-existing-car">Empréstimo</span></label><label class="radio inline"><input id="security-type-is-owned-false" type="radio" name="securityIsOwned"' + jade.attr("checked", preselects.securityIsOwned == false, true, false) + ' value="false"/><span class="label-for-new-car">Financiamento</span></label></div><div class="section no-security hide">');
        if (preselects.securityType === "home") {
            buf.push('<p>Você precisa ter um imóvel em seu nome para continuar. Não é o seu caso?\n <br/><a href="/emprestimo-pessoal">Peça aqui um Empréstimo Pessoal</a></p>');
        } else if (preselects.defaultForm != true) {
            var securityPrompt = "Tenho um veículo quitado e quero usá-lo como garantia.";
            buf.push('<div class="col"><label class="check inline"><input id="security-type-car" type="checkbox" name="securityType" value="car" data-validate="data-validate" data-validate-required="Necessário"' + jade.attr("checked", preselects.securityType !== "no-security", true, false) + "/><span>" + jade.escape((jade_interp = securityPrompt) == null ? "" : jade_interp) + "</span></label>");
            if (preselects.securityType != "home") {
                buf.push('<p class="hint">Ao usar seu veículo como garantia conseguimos taxas menores e valores maiores.</p>');
            }
            buf.push("</div>");
        }
        buf.push('</div><div class="section values-section hide"><div class="col applied-amount-container"><div class="applied-amount-input slider-input"><div class="label-container"><label>Valor do emprestimo:&nbsp;<span class="applied-amount-value">&nbsp;</span></label></div><div name="appliedAmount" data-range-min=\'1500\' data-range-max=\'250000\' data-step=\'100\' data-start=\'1500\' class="applied-amount-input-slider"></div></div></div><div class="col security-value-container">');
        var minRange, maxRange, dataStart;
        if (preselects.securityType === "home") {
            minRange = 8e4;
            maxRange = 4e6;
            dataStart = 15e4;
        } else {
            minRange = 1e4;
            maxRange = 3e5;
            dataStart = 15e3;
        }
        buf.push('<div class="security-value-input slider-input"><div class="label-container">');
        if (preselects.securityType === "home") {
            buf.push('<label>Valor do imóvel:&nbsp;<span class="security-value"></span></label>');
        } else {
            buf.push('<label>Valor do veículo:&nbsp;<span class="security-value"></span></label>');
        }
        buf.push('</div><div name="vehicleSecurity.value"' + jade.attr("data-range-min", minRange, true, false) + jade.attr("data-range-max", maxRange, true, false) + " data-step='100'" + jade.attr("data-start", dataStart, true, false) + ' class="security-value-slider"></div></div></div><div class="col downpayment-container"><div class="vehiclesecurity-downpayment-input slider-input"><div class="label-container"><label>Valor da entrada:&nbsp;<span class="vehiclesecurity-downpayment"></span></label></div><div name="vehicleSecurity.downPayment" data-range-min=\'1500\' data-range-max=\'250000\' data-step=\'100\' data-start=\'1500\' class="vehiclesecurity-downpayment-slider"></div></div></div></div><div class="section loan-period hide"><div class="col"><div class="label-container"><label><span class="finance-text hide">Período de financiamento*</span><span class="loan-text hide">Período de empréstimo*</span></label></div><div class="controls"><select name="loanPeriodInMonths" data-validate="data-validate" data-validate-required="Informe o período desejado"></select></div></div></div><div class="section two-col"><div class="col"><div class="label-container"><label>Nome*</label></div><div class="controls"><input type="text" placeholder="Joao Carlos" name="firstName" data-validate="data-validate"' + jade.attr("value", previousapplication.firstName, true, false) + ' data-validate-required="Preencha seu nome"/></div></div><div class="col"><div class="label-container"><label>Sobrenome*</label></div><div class="controls"><input type="text" placeholder="Silva dos Santos Jr" name="lastName"' + jade.attr("value", previousapplication.lastName, true, false) + ' data-validate="data-validate" data-validate-required="Preencha seu sobrenome"/></div></div></div><div class="section two-col"><div class="col"><div class="label-container"><label>CPF*                       </label></div><div class="controls controls2">                       <input autocomplete="off" type="tel" ,="," placeholder="000.000.000-00" data-input-mask="999.999.999-99" name="personalNumber"' + jade.attr("value", previousapplication.personalNumber, true, false) + ' data-validate="data-validate" data-validate-required="Preencha o seu número de CPF" data-validate-cpf="Preencha um número de CPF válido"/><button type="button" class="check-personalNumber"><div id="check-personalNumber" aria-hidden="true" class="fa fa-check hide"></div></button></div></div><div class="col"><div class="label-container"><label>E-mail*</label></div><div class="controls"><input type="email" placeholder="joao.silva@example.com" name="email"' + jade.attr("value", previousapplication.email, true, false) + ' data-validate="data-validate" data-validate-required="Preencha seu e-mail" data-validate-email="Preencha um endereço de e-mail válido"/></div></div></div><div class="section telephone-section two-col"><div class="col telephone-column"><div class="label-container"><label>Celular*</label></div><div class="controls"><input autocomplete="off" type="tel" placeholder="(11) XXXXX XXXX" name="telephoneNumber" data-input-mask="(99) 99999 9999" data-validate="data-validate"' + jade.attr("value", previousapplication.telephoneNumber, true, false) + ' data-validate-required="Preencha um número de telefone" data-validate-telephone="Preencha um número de telefone válido"/></div></div><div class="col"><div class="label-container"><label>Data de nascimento*</label></div><div class="controls">');
        buf.push(templatizer["me"]["newapplication"]["date-editor"]("birthDate", previousapplication.birthDate, new Date().getFullYear() - 18, "Informe a Data de Nascimento"));
        buf.push('</div></div></div><div class="section status-section two-col"><div class="col civil-status-column"><select name="civilStatus" data-validate="data-validate" data-validate-required="Selecione um estado civil"><option value="">Estado civil</option><option value="single"' + jade.attr("selected", previousapplication.civilStatus == "single", true, false) + '>Solteiro(a)</option><option value="married"' + jade.attr("selected", previousapplication.civilStatus == "married", true, false) + '>Casado(a)</option><option value="divorced"' + jade.attr("selected", previousapplication.civilStatus == "divorced", true, false) + '>Divorciado(a)</option></select></div><div class="col work-status-columnok-alert-modal"><select name="workStatus" data-validate="data-validate" data-validate-required="Selecione sua ocupação atual"><option value="">Ocupação</option><option value="public-employee"' + jade.attr("selected", previousapplication.workStatus == "public-employee", true, false) + '>Funcionário Público</option><option value="private-employee"' + jade.attr("selected", previousapplication.workStatus == "private-employee", true, false) + '>Funcionário do Setor Privado</option><option value="independent-contractor"' + jade.attr("selected", previousapplication.workStatus == "independent-contractor", true, false) + '>Autônomo</option><option value="business-owner"' + jade.attr("selected", previousapplication.workStatus == "business-owner", true, false) + '>Empresário ou PJ</option><option value="liberal-professional"' + jade.attr("selected", previousapplication.workStatus == "liberal-professional", true, false) + '>Profissional Liberal</option><option value="retired"' + jade.attr("selected", previousapplication.workStatus == "retired", true, false) + '>Aposentado ou Pensionista</option><option value="unemployed"' + jade.attr("selected", previousapplication.workStatus == "unemployed", true, false) + '>Desempregado</option></select></div></div></div><div class="cta-container"><div class="legal">Ao enviar este pedido, eu concordo com os&nbsp;<a href="/terms" target="_blank">Termos de Uso</a></div><button type="submit" class="btn btn-large submit"><i id="enabled" class="fa fa-check-circle"></i><i id="disabled" class="fa fa-spinner fa-pulse hide"></i><span>Compare agora - É gratuito!</span></button><div class="alert errors hide">Existem erros de prenchimento nessa página. Por favor corrija antes de continuar.</div><div class="modal-alert"> <div class="text-modal"> <span class="text-modal">Realize novas solicitações após logar-se. Sua senha será enviada para email e telefone cadastrados</span></div><button type="button" id="ok-alert-modal" class="btn btn-large ok-modal"><span>Continuar...            </span></button></div><div class="deposit-disclaimer"><b>ATENÇÃO: NÃO faça nenhum depósito ou pagamento para análise ou liberação do empréstimo.</b><div class="deposit-inner"> Nosso serviço é gratuito, portanto nós nunca pedimos pagamentos antecipados. Você só vai pagar seu empréstimo ou financiamento, diretamente para o banco ou financeira, após receber o crédito.</div></div></div><div class="interest-disclaimer disclaimer-he hide"><p class="small">Os prazos para pagamento do refinanciamento de imóvel podem variar entre 12 e 240 meses.<br/>Custo Efetivo Total (CET) mínimo de 19,11% a.a. e máximo de 25,40% a.a., variando de acordo com as condições do empréstimo.<br/>Exemplo: Valor do crédito: R$ 300.000,00. Prazo: 120 meses.<br/>Valor IOF: R$ 10.296,14. Taxa de Juros: 1,39% a.m.+IPCA<br/>CET: 1,47% a.m / 19,11% a.a. Parcela: R$ 5.331,23 - Sistemad de Amortização Price</p></div><div class="interest-disclaimer disclaimer-cp hide"><p class="small">Os prazos para pagamento do Crédito Pessoal podem variar entre 6 e 36 meses.<br/>Custo Efetivo Total (CET) mínimo de 30,8% a.a. e máximo de 621,35% a.a., variando de acordo com as condições do empréstimo.<br/>Exemplo: Valor do crédito:  R$ 5.000,00. Prazo: 12 meses.<br/>Valor IOF:  R$ 125,40. Valor Tarifa Cadastro:  R$ 500,00. Taxa de Juros:  9,9% a.m.<br/>CET:  12,47% a.m / 309,79% a.a. Parcela: R$ 783,36</p></div><div class="interest-disclaimer disclaimer-refin hide"><p class="small">Os prazos para pagamento do refinanciamento de veículos podem variar entre 6 e 60 meses.<br/>Custo Efetivo Total (CET) mínimo de 32,15% a.a. e máximo de 61,00% a.a., variando de acordo com as condições do empréstimo.<br/>Exemplo: Valor do crédito: R$ 22.000,00. Prazo: 48 meses.<br/>Valor IOF: R$ 673,14. Valor Tarifa Cadastro: R$ 612,00. Taxa de Juros: 2,40% a.m.<br/>CET: 3,06% a.m / 44,31% a.a. Parcela: R$ 888,35.</p></div></form>');
        return buf.join("");
    };


    // me/newapplication.jade:date-editor compiled template
    templatizer["me"]["newapplication"]["date-editor"] = function tmpl_me_newapplication_date_editor(name, value, initialYear, validadeMessage) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.attr("data-initial-year", initialYear || new Date().getFullYear(), true, false) + ' class="date-editor"><input type="hidden"' + jade.attr("name", name, true, false) + jade.attr("value", value, true, false) + '/><select data-validate="data-validate"' + jade.attr("data-validate-required", validadeMessage, true, false) + ' class="day"></select><select data-validate="data-validate"' + jade.attr("data-validate-required", validadeMessage, true, false) + ' class="month"></select><select data-validate="data-validate"' + jade.attr("data-validate-required", validadeMessage, true, false) + ' class="year"></select></div>');
        return buf.join("");
    };


    // me/newapplication.jade:start-page-intro compiled template
    templatizer["me"]["newapplication"]["start-page-intro"] = function tmpl_me_newapplication_start_page_intro() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="start-page-intro-boxes"><div class="start-page-intro-box box-1"><h1>O parceiro ideal para empréstimo pessoal</h1><div class="main-image"><div class="main-image-container"><img src="/images/main-new-image.png?v=2"/></div></div><p>O empréstimo pessoal é uma opção interessante para quem precisa de dinheiro emprestado rápido para resolver imprevistos ou completar um projeto em andamento.</p><b>Mais vantajoso que cheque especial e cartão de crédito.</b><h2>Tem um carro ou caminhão quitado a partir do ano 2002?</h2><p>Então o <strong> refinanciamento de veículo </strong> pode ser o empréstimo perfeito para você. Além de taxas ainda mais atraentes do que o crédito pessoal, você continua com toda liberdade de usar seu veículo durante o período contratado.</p><div class="start-page-intro-phone"><h5>Fale com a nossa equipe de especialistas:</h5><a href="tel:08006073001">0800 607-3001</a></div></div></div>');
        return buf.join("");
    };


    // me/newapplication.jade:me-nav compiled template
    templatizer["me"]["newapplication"]["me-nav"] = function tmpl_me_newapplication_me_nav(locals) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="top-nav main-nav"><div class="top-nav-left"><div class="top-nav-logo"><a href="/"><div class="logo-image-container"><img src="/images/logo.png"/></div></a></div></div><div class="top-nav-center"><span>&nbsp;</span></div><div class="top-nav-right"><div class="top-nav-login"><div class="logged-in"> ');
        if (locals.user) {
            buf.push("<span>" + jade.escape((jade_interp = locals.user.email) == null ? "" : jade_interp) + "</span>");
        }
        buf.push('</div><div class="logout-link"><a href="/logout"><i class="fa fa-sign-out"></i>Sair</a></div></div></div></nav>');
        return buf.join("");
    };

    // me/offers/accepted.jade compiled template
    templatizer["me"]["offers"]["accepted"] = function tmpl_me_offers_accepted(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        buf.push('<div class="me-site-layout">');
        buf.push(templatizer["me"]["offers"]["accepted"]["me-nav"](locals));
        buf.push('<div class="content-container"><div class="accepted-page"><h1>Obrigado!</h1><p>Enviamos um email para você com os detalhes sobre como finalizar o seu pedido. Você tem até 5 dias para comparecer à loja ibi informada no seu email!</p><p>Se precisar, ligue para a nossa central: 0800 607-3001</p><a href="/logout" class="btn primary">Sair</a></div></div></div>');
        return buf.join("");
    };

    // me/offers/accepted.jade:me-nav compiled template
    templatizer["me"]["offers"]["accepted"]["me-nav"] = function tmpl_me_offers_accepted_me_nav(locals) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="top-nav main-nav"><div class="top-nav-left"><div class="top-nav-logo"><a href="/"><div class="logo-image-container"><img src="/images/logo.png"/></div></a></div></div><div class="top-nav-center"><span>&nbsp;</span></div><div class="top-nav-right"><div class="top-nav-login"><div class="logged-in"> ');
        if (locals.user) {
            buf.push("<span>" + jade.escape((jade_interp = locals.user.email) == null ? "" : jade_interp) + "</span>");
        }
        buf.push('</div><div class="logout-link"><a href="/logout"><i class="fa fa-sign-out"></i>Sair</a></div></div></div></nav>');
        return buf.join("");
    };

    // me/offers/view.jade compiled template
    templatizer["me"]["offers"]["view"] = function tmpl_me_offers_view(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(application, bid, numeral, undefined) {
            buf.push('<div class="me-site-layout">');
            buf.push(templatizer["me"]["offers"]["view"]["me-nav"](locals));
            buf.push('<div class="content-container"><div class="offer-page"><div class="information-card"><div class="supplier-details"><div class="supplier-details-header"><div class="image-container"><img' + jade.attr("src", bid.supplier.logoImageUrl, true, false) + '/></div></div></div><div class="offer-details"><div class="offer-details-table"><div class="table-header"> <div class="left"> <h3>Resumo da Proposta</h3></div><div class="right"><h3>&nbsp;</h3></div></div><div class="table-row"><div class="left"><h3>' + jade.escape((jade_interp = application.firstName) == null ? "" : jade_interp) + " " + jade.escape((jade_interp = application.lastName) == null ? "" : jade_interp) + ' </h3></div><div class="right"><h3>' + jade.escape((jade_interp = application.personalNumber) == null ? "" : jade_interp) + ' </h3></div></div><div class="table-row"><div class="left"> <h3>Valor pré-aprovado</h3></div><div class="right"> <h3>' + jade.escape((jade_interp = numeral(bid.approvedAmount).format("$ 0,0")) == null ? "" : jade_interp) + "</h3></div></div>");
            if (application.loanPeriodInMonths > 0) {
                buf.push('<div class="table-row"><div class="left"> <h3>Prazo</h3></div><div class="right"> <h3>' + jade.escape((jade_interp = application.loanPeriodInMonths) == null ? "" : jade_interp) + " meses</h3></div></div>");
            }
            if (application.loanPeriodInYears > 0) {
                buf.push('<div class="table-row"><div class="left">Prazo</div><div class="right">' + jade.escape((jade_interp = application.loanPeriodInYears) == null ? "" : jade_interp) + " anos</div></div>");
            }
            if (bid.interestRate > 0) {
                buf.push('<div class="table-row"><div class="left"> <h3>Taxa de juro</h3></div><div class="right"> <h3>' + jade.escape((jade_interp = bid.interestRate) == null ? "" : jade_interp) + " %</h3></div></div>");
            }
            if (bid.totalAnnualInterestRate > 0) {
                buf.push('<div class="table-row"><div class="left"> <h3>Custo Efetivo Total Anual</h3></div><div class="right"> <h3>' + jade.escape((jade_interp = bid.totalAnnualInterestRate) == null ? "" : jade_interp) + " %</h3></div></div>");
            }
            (function() {
                var $obj = bid.fees;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var fee = $obj[$index];
                        buf.push('<div class="table-row"><div class="left">' + jade.escape((jade_interp = fee.name) == null ? "" : jade_interp) + '</div><div class="right">R$ ' + jade.escape((jade_interp = fee.value) == null ? "" : jade_interp) + "</div></div>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var fee = $obj[$index];
                        buf.push('<div class="table-row"><div class="left">' + jade.escape((jade_interp = fee.name) == null ? "" : jade_interp) + '</div><div class="right">R$ ' + jade.escape((jade_interp = fee.value) == null ? "" : jade_interp) + "</div></div>");
                    }
                }
            }).call(this);
            buf.push('<div class="table-row summary-row">');
            if (bid.monthlyInstallment > 0) {
                buf.push("<h3> " + jade.escape((jade_interp = numeral(bid.monthlyInstallment).format("$ 0,0.00")) == null ? "" : jade_interp) + "/mês</h3>");
            }
            buf.push('</div></div></div><div class="cta-container"><form class="accept-bid-form"><input type="hidden" name="applicationId"' + jade.attr("value", application.id, true, false) + '/><input type="hidden" name="bidId"' + jade.attr("value", bid.id, true, false) + '/><button class="btn primary">Aceitar a oferta desse parceiro</button></form><span>ou &nbsp;</span><a href="/me">Voltar para pagina inicial</a></div></div></div><div class="more-details">    ');
            buf.push(templatizer["me"]["offers"]["view"]["footer"]());
            buf.push("</div></div></div>");
        }).call(this, "application" in locals_for_with ? locals_for_with.application : typeof application !== "undefined" ? application : undefined, "bid" in locals_for_with ? locals_for_with.bid : typeof bid !== "undefined" ? bid : undefined, "numeral" in locals_for_with ? locals_for_with.numeral : typeof numeral !== "undefined" ? numeral : undefined, "undefined" in locals_for_with ? locals_for_with.undefined : typeof undefined !== "undefined" ? undefined : undefined);
        return buf.join("");
    };

    // me/offers/view.jade:footer compiled template
    templatizer["me"]["offers"]["view"]["footer"] = function tmpl_me_offers_view_footer() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="footer"><div class="footer-inner"><div class="footer-logo-container"><div class="footer-logo"><img src="/images/new-logo-footer.png"/></div><div class="security-section"><div id="DigiCertClickID_9hlvA_e5" data-language="pt" class="certisign-seal"><!-- a(href="https://www.digicert.com/ssl-certificate.htm") SSL Certificates--></div></div></div></div><div class="footer-inner"><div class="footer-section"><p>FinanZero Brasil Serviços Online Ltda. CNPJ/MF 23.722.194/0001-34<br/>Av. Paulista, 1499, Conj. 2110 – São Paulo, SP - CEP: 01311-200<a href="tel:0800 607-3001"><i class="fa fa-phone"></i>0800 607-3001</a></p></div></div><div class="footer-inner"><div class="footer-legal"><p class="small">A FinanZero é uma empresa intermediadora do processo de concessão de financiamento veicular entre bancos e clientes. Nós negociamos o seu financiamento com os bancos para buscar as melhores taxas do mercado. Não somos uma instituição financeira. Somos correspondentes bancários, regulamentados pela lei 3.954/11 do Banco Central do Brasil.<script>var __dcid = __dcid || [];\n__dcid.push(["DigiCertClickID_9hlvA_e5", "3", "m", "black", "9hlvA_e5"]);\n(function(){var cid=document.createElement("script");\ncid.async=true;\ncid.src="//seal.digicert.com/seals/cascade/seal.min.js";\nvar s = document.getElementsByTagName("script");\nvar ls = s[(s.length - 1)];ls.parentNode.insertBefore(cid, ls.nextSibling);}());</script></p></div></div></div>');
        return buf.join("");
    };


    // me/offers/view.jade:me-nav compiled template
    templatizer["me"]["offers"]["view"]["me-nav"] = function tmpl_me_offers_view_me_nav(locals) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="top-nav main-nav"><div class="top-nav-left"><div class="top-nav-logo"><a href="/"><div class="logo-image-container"><img src="/images/logo.png"/></div></a></div></div><div class="top-nav-center"><span>&nbsp;</span></div><div class="top-nav-right"><div class="top-nav-login"><div class="logged-in"> ');
        if (locals.user) {
            buf.push("<span>" + jade.escape((jade_interp = locals.user.email) == null ? "" : jade_interp) + "</span>");
        }
        buf.push('</div><div class="logout-link"><a href="/logout"><i class="fa fa-sign-out"></i>Sair</a></div></div></div></nav>');
        return buf.join("");
    };

    // partner/ibi.jade compiled template
    templatizer["partner"]["ibi"] = function tmpl_partner_ibi(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        buf.push('<div class="blank-site-layout">');
        buf.push(templatizer["partner"]["ibi"]["main-nav"]());
        buf.push('<div class="content-container"><div class="outer-container partner"><h2>Banco IBI - Lista das Lojas </h2><div class="partner-branches-listing"><table id="branches_list" class="branches-list"><thead><tr><th>Loja</th><th class="state"> <span>Estado</span><select name="stateFilter"></select></th><th class="city">Cidade<select name="cityFilter"></select></th><th class="phone">Telefone</th><th>Endereço</th></tr></thead><tbody class="branches-list-items"></tbody></table></div></div></div></div>');
        return buf.join("");
    };

    // partner/ibi.jade:main-nav compiled template
    templatizer["partner"]["ibi"]["main-nav"] = function tmpl_partner_ibi_main_nav() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="top-nav main-nav"><div class="top-nav-left"><div class="top-nav-logo"><a href="/"><div class="logo-image-container"><img src="/images/logo.png"/></div></a></div></div><div class="top-nav-center"><div class="top-nav-contact"><div class="top-nav-contact-header"></div></div></div><div class="top-nav-right"><ul><li class="login-link"><a href="/login"><i class="fa fa-lock"></i>Já fiz meu pedido</a></li></ul></div></nav>');
        return buf.join("");
    };

    // partner/index.jade compiled template
    templatizer["partner"]["index"] = function tmpl_partner_index(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        buf.push('<div class="blank-site-layout">');
        buf.push(templatizer["partner"]["index"]["main-nav"]());
        buf.push('<div class="content-container"><div class="outer-container partner"><h2>Nossos Parceiros de Crédito</h2><div class="partner-listing"><ul><li> <div class="image-container"><img src="/images/partner-logos/bv-correspondente.gif" alt="BV Financeira" height="100"/></div></li><li> <div class="image-container"><img src="/images/partner-logos/banco-pan.png" alt="Banco Pan" height="38"/></div><div class="image-container"><img src="/images/partner-logos/portocred.png" alt="Portocred" height="50"/></div></li></ul><ul><li> <div class="image-container"><img src="/images/partner-logos/simplic.png" alt="Simplic" height="42"/></div></li><li> <div class="image-container"><img src="/images/partner-logos/creditas.png" alt="Creditas" width="130"/></div></li></ul></div></div></div></div>');
        return buf.join("");
    };

    // partner/index.jade:main-nav compiled template
    templatizer["partner"]["index"]["main-nav"] = function tmpl_partner_index_main_nav() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="top-nav main-nav"><div class="top-nav-left"><div class="top-nav-logo"><a href="/"><div class="logo-image-container"><img src="/images/logo.png"/></div></a></div></div><div class="top-nav-center"><div class="top-nav-contact"><div class="top-nav-contact-header"></div></div></div><div class="top-nav-right"><ul><li class="login-link"><a href="/login"><i class="fa fa-lock"></i>Já fiz meu pedido</a></li></ul></div></nav>');
        return buf.join("");
    };

    // terms/index.jade compiled template
    templatizer["terms"]["index"] = function tmpl_terms_index(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        buf.push('<div class="blank-site-layout">');
        buf.push(templatizer["terms"]["index"]["main-nav"]());
        buf.push('<div class="content-container"><div class="outer-container terms"><h1>TERMOS E CONDIÇÕES DE USO</h1><p>O endereço eletrônico https://finanzero.com.br (“Site”) é propriedade de FinanZero Brasil Serviços Online Ltda., inscrita no CNPJ/MF sob o nº 23.722.194/0001-34 (“Sociedade”). O acesso e o uso deste Site estão sujeitos a estes Termos e Condições de Uso (“Termo de Uso”) e a Política de Privacidade, disponível através do seguinte link https://finanzero.com.br. </p><p>Ao acessar e usar o Site, qualquer pessoa, física ou jurídica, (“Usuário”) aceita todas as condições deste Termo de Uso e da Política de Privacidade. Caso o Usuário não concorde com alguma condição destes instrumentos, o acesso e o uso deste Site devem ser imediatamente interrompidos. </p><p>Este Termo de Uso define os direitos e obrigações do Usuário durante o acesso e o uso do Site.</p><h2>I – Conteúdo deste Site</h2><p>A Sociedade reserva-se o direito de, a qualquer momento, sem aviso prévio, modificar, alterar, acrescentar ou remover o conteúdo das páginas deste site, incluindo textos, imagens e fotografias, sendo que as novas versões passarão a vigorar a partir do momento em que forem postadas no Site. Por isso o Usuário deve ler o Termo de Uso e a Política de Privacidade sempre que visitar o Site. </p><h2>II – Responsabilidade do Usuário</h2><p>É de inteira responsabilidade do Usuário: (i) providenciar o seu próprio acesso à Internet e pagar todas as taxas de serviço eventualmente cobradas por terceiros com relação a tal acesso; (ii) providenciar seu próprio acesso a um endereço para envio de mensagens eletrônicas e pagar todas as taxas de serviço eventualmente cobradas por terceiros com relação a tal acesso; (iii) providenciar todo o equipamento necessário para efetuar sua conexão à Internet, incluindo, mas não se limitando, a um computador e um modem; (iv) efetuar seu próprio cadastro no Site, responsabilizando-se pela correção e veracidade dos dados informados, assim como pela guarda de sua senha de acesso; (v) manter o ambiente de seu computador seguro, com uso de ferramentas disponíveis como antivírus e firewall, entre outras, atualizadas, de modo a contribuir na prevenção de riscos eletrônicos do lado do Usuário; (vii) o uso de material e/ou conteúdo que possa infringir o direito de terceiros; e (viii) o conteúdo por ele disponibilizado neste Site, assegurando que o mesmo não viola quaisquer direitos de terceiros. </p><p>O Usuário concorda com a obrigação de indenizar a Sociedade em ação regressiva por eventuais prejuízos causados à mesma, em decorrência de ações que envolvam atos do Usuário, incluindo os efeitos do Art. 70, III, do Código de Processo Civil.</p><h2>III – Propriedade Intelectual</h2><p>Este Site contém material de propriedade intelectual da Sociedade ou para ela licenciada. Este material inclui, mas não está limitado ao design, disposição, aparência e gráficos. A reprodução é proibida, exceto em conformidade com o aviso de direitos autorais, que faz parte deste Termo de Uso e da Política de Privacidade. </p><p>O Usuário assume toda e qualquer responsabilidade, de caráter civil e/ou criminal, pela utilização indevida das informações, textos, gráficos, marcas, obras, e de todo e qualquer direito de propriedade intelectual ou industrial deste Site. Qualquer utilização não contemplada na presente autorização será considerada como uma violação dos direitos autorais e estará sujeita às sanções cabíveis na Lei 9.610/98, de 19 de fevereiro de 1998, e suas eventuais alterações.</p><h2>IV – Exclusão de Garantias e de Responsabilidade</h2><p>Em decorrência de questões operacionais e de terceirização de serviços, o Site e os serviços estão sujeitos a eventuais problemas de interrupção, falha técnica, e/ou de indisponibilidade de funcionamento temporário. Embora a Sociedade empregue seus melhores esforços na segurança de seus sistemas, considerando a vulnerabilidade e o constante avanço da tecnologia de invasões, a Sociedade NÃO SE RESPONSABILIZA POR ATOS DE TERCEIROS QUE LOGREM ÊXITO EM COLETAR OU UTILIZAR, POR QUAISQUER MEIOS, DADOS CADASTRAIS E INFORMAÇÕES DISPONIBILIZADAS PELO USUÁRIO no Site.</p><p>Este Site também pode incluir esporadicamente links para outros websites. Tais links são publicados para sua conveniência com o objetivo de fornecer mais informações. Eles não significam que nós endossamos o(s) site(s), e igualmente não temos nenhuma responsabilidade pelo seu conteúdo.</p><h2>V – Privacidade dos Usuários </h2><p>As informações de cadastro e demais informações sobre os Usuários estão sujeitas ao tratamento definido pela Política de Privacidade, conforme instrumento disponibilizado no Site. Para maiores informações, favor consultar o documento Política de Privacidade. Tal instrumento constitui parte integrante deste Termo de Uso e do endereço eletrônico https://finanzero.com.br e deverá ser lido atentamente por todos os Usuários antes da aceitação e utilização do Site. O Usuário desde já concorda que a Sociedade poderá ceder ou divulgar informações pessoais, incluídas nos conteúdos de seu Site, se vier a ser intimada, por decisão governamental ou judicial.</p><h2>VI – Rescisão </h2><p>Para promover o bom funcionamento e qualidade dos Serviços do Site, a Sociedade se reserva no direito de, sem a necessidade de notificação prévia, impedir ou interromper o acesso do Usuário que, segundo a Sociedade, estiver atuando de qualquer forma a violar qualquer disposição contida neste Termo de Uso ou na Política de Privacidade. </p><h2>VII – Disposições Gerais</h2><p>A tolerância ao eventual descumprimento de quaisquer das cláusulas e condições do presente instrumento não constituirá novação das obrigações aqui estipuladas e tampouco impedirá ou inibirá a exigibilidade das mesmas a qualquer tempo. O presente Termo de Uso constitui acordo integral entre as partes envolvidas, prevalecendo sobre qualquer outro entendimento firmado anteriormente.</p><p>O uso deste Site e qualquer litígio decorrente dessa utilização estão sujeitos às leis da República Federativa do Brasil e dos tribunais da Comarca Central da Capital do Estado de São Paulo.</p><h2>POLÍTICA DE PRIVACIDADE</h2><p>O endereço eletrônico https://finanzero.com.br (“Site”) é propriedade de FinanZero Brasil Serviços Online Ltda., inscrita no CNPJ/MF sob o nº 23.722.194/0001-34 (“Sociedade”). O acesso e o uso deste Site estão sujeitos a esta Política de Privacidade e aos Termos e Condições de Uso (“Termo de Uso”), por isso, qualquer pessoa, física ou jurídica, que acessar e usar este Site (“Usuário”) deve ler na íntegra ambos instrumentos. </p><p>POR FAVOR, LEIA COM ATENÇÃO ESTA POLÍTICA DE PRIVACIDADE PARA CONHECER OS TERMOS E CONDIÇÕES EM QUE SUAS INFORMAÇÕES PESSOAIS SERÃO ARMAZENADAS, UTILIZADAS E PROTEGIDAS EM NOSSO SITE. AO FORNECER INFORMAÇÕES PESSOAIS OU NAVEGAR NO SITE, VOCÊ ESTARÁ AUTOMATICAMENTE CONCORDANDO COM AS REGRAS DE UTILIZAÇÃO, PROTEÇÃO E SEGURANÇA AQUI ESTABELECIDAS.</p><p>A Sociedade não é uma instituição financeira, companhia de seguros, operadora de meios de pagamento ou bandeira de cartão de crédito. A atividade de correspondente bancário, atrelada aos nossos Serviços, é regulada pela Resolução nº 3.954, de 24 de fevereiro de 2011, do Banco Central do Brasil. </p><p>A Sociedade não cobra quaisquer valores diretamente dos usuários. Em alguns casos, poderemos receber remuneração das Instituições Financeiras parceiras, anunciantes e/ou outros parceiros listados no Site. AS INSTITUIÇÕES FINANCEIRAS PARCEIRAS PODERÃO EVENTUALMENTE COBRAR TAXAS DOS USUÁRIOS, SEM QUALQUER ENVOLVIMENTO COM A SOCIEDADE OU COM O SITE. </p><h2>I – Finalidade</h2><p>A solicitação de dados pessoais do Usuário pela Sociedade tem como finalidade, exclusivamente, a simulação e a cotação a fim de intermediar a contratação de serviços e produtos das Instituições Financeiras parceiras da Sociedade para os nossos Usuários. O nosso principal objetivo é gerar conveniência ao nosso Usuário no seu processo de avaliação e contratação destes serviços e produtos (“Serviços”). </p><h2>II – Coleta de informações</h2><p>Ao utilizar os Serviços de nosso Site, solicitaremos que o Usuário se identifique com o preenchimento de apenas um cadastro ou proposta, sendo que o Usuário poderá receber respostas de várias Instituições Financeiras parceiras, podendo comparar e contratar a condição que achar mais conveniente. O SITE NÃO GARANTE AO USUÁRIO NENHUM SUCESSO DE APROVAÇÃO OU CONTRATAÇÃO DE CRÉDITO. </p><p>A identificação nada mais é que o preenchimento de um cadastro pessoal contendo campos obrigatórios e opcionais, sendo que as informações coletadas visam possibilitar um tratamento especial e individualizado para cada Usuário. Através dessas informações, buscamos aprimorar nosso canal de comunicação com o Usuário, conhecê-lo melhor e prestar serviços que atendam às suas necessidades, expectativas e preferências.</p><p>Além das informações do cadastro, a Sociedade também pode armazenar dados sobre a contratação efetiva dos Usuários com as Instituições Financeiras parceiras, e outros tipos de interação com o Site. </p><h2>III – Formas de utilização</h2><p>Ao preencher os dados e anexar os documentos solicitados pelo Site, o Usuário sempre deverá prezar pela veracidade e exatidão dos mesmos, sabendo que poderá responder civil ou criminalmente por informações indevidas ou equivocadas. O Usuário autoriza o Site e seus parceiros a consultar informações adicionais sobre o próprio em fontes e de naturezas diversas e a realizar contatos telefônicos com o próprio ou com terceiros por ele indicados. O Usuário autoriza a Sociedade a usar estes dados e documentos para realizar avaliação do Perfil de Crédito, confirmar a veracidade das informações prestadas e para outros usos necessários à prestação dos produtos e serviços oferecidos. O USUÁRIO AUTORIZA O SITE A COMPARTILHAR OS DADOS E DOCUMENTOS NECESSÁRIOS PARA REALIZAR OS SERVIÇOS OFERECIDOS COM SEUS PARCEIROS (INSTITUIÇÕES FINANCEIRAS E PARCEIROS OPERACIONAIS).</p><p>Suas informações serão usadas, ainda, para estatísticas sobre o seu perfil e de outros internautas que acessam o Site, permitindo o desenvolvimento de produtos e serviços personalizados.</p><p>O Site realizará, a critérios próprios e de forma isenta, uma avaliação das informações, documentos e referências prestadas pelo Usuário ou obtidas adicionalmente para definição do Perfil de Crédito, que corresponde a uma qualificação do Site quanto ao seu perfil de risco de crédito. O Site associa o Perfil de Crédito à uma faixa de taxas de juros praticadas nos empréstimos oferecidos pelas instituições financeiras em geral para estimar a probabilidade do Usuário ter sua solicitação de crédito aprovada. Este critério de avaliação poderá ser revisto a qualquer momento o que poderá implicar em alteração do Perfil de Crédito do Usuário sem aviso prévio. O Site não é obrigado a divulgar nenhum detalhe do seu critério de avaliação. Pela avaliação e uso do Perfil de Crédito, o Site não poderá ser responsabilizado civil ou criminalmente, tampouco estará sujeito a indenização ou ressarcimento por solicitação do Usuário. O Perfil de Crédito corresponde apenas a uma estimativa do Site sobre a faixa mais provável de ofertas de taxas de juros que o Usuário receberá das Instituições Financeiras e, por ser uma estimativa, não garante que o Usuário terá seu crédito aprovado e tampouco nas condições estimadas pelo Site.</p><h2>IV – Segurança e proteção (Criptografia de Dados)</h2><p>Suas informações serão armazenadas em um servidor seguro, e sempre que houver necessidade de identificação ou fornecimento de informações sigilosas, a transmissão de dados entre seu computador e o Site será realizada através de conexão segura.</p><h2>V – Exclusão de Garantias e de Responsabilidade</h2><p>Não nos responsabilizamos pelos serviços prestados por terceiros, incluindo as Instituições Financeiras parceiras, após o Usuário ser direcionado às mesmas através dos links contidos no Site o qual ocorrerá por conta e risco do Usuário, inclusive os sites direcionados serão regidos pelos próprios Termos de Uso e Políticas de Privacidade destes sites os quais deverão ser lidos pelo Usuário. O Usuário será o único responsável por entender os termos e condições de contratação dos produtos e serviços que serão oferecidos/contratados a partir das simulações realizadas no Site. A SOCIEDADE NÃO PODERÁ SER RESPONSABILIZADA POR QUALQUER PERDA OU DANO QUE O USUÁRIO POSSA INCORRER COM ESTAS CONTRATAÇÕES.</p><h2>VI – Disposições Gerais</h2><p>A tolerância ao eventual descumprimento de quaisquer das cláusulas e condições do presente instrumento não constituirá novação das obrigações aqui estipuladas e tampouco impedirá ou inibirá a exigibilidade das mesmas a qualquer tempo. A presente Política de Privacidade constitui acordo integral entre as partes envolvidas, prevalecendo sobre qualquer outro entendimento firmado anteriormente.</p><p>O uso deste Site e qualquer litígio decorrente dessa utilização estão sujeitos às leis da República Federativa do Brasil e dos tribunais da Comarca Central da Capital do Estado de São Paulo</p></div></div></div>');
        return buf.join("");
    };

    // terms/index.jade:main-nav compiled template
    templatizer["terms"]["index"]["main-nav"] = function tmpl_terms_index_main_nav() {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="top-nav main-nav"><div class="top-nav-left"><div class="top-nav-logo"><a href="/"><div class="logo-image-container"><img src="/images/logo.png"/></div></a></div></div><div class="top-nav-center"><div class="top-nav-contact"><div class="top-nav-contact-header"></div></div></div><div class="top-nav-right"><ul><li class="login-link"><a href="/login"><i class="fa fa-lock"></i>Já fiz meu pedido</a></li></ul></div></nav>');
        return buf.join("");
    };

    return templatizer;
}));
