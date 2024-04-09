import{_ as e,c as t,o as a,a4 as r}from"./chunks/framework.Bl20_RFa.js";const f=JSON.parse('{"title":"Upgrade and Security Bulletin Checks","description":"The Terramate CLI commands interacts with the Terramate Checkpoint service to check for the availability of new versions and for critical security bulletins about the current version.","frontmatter":{"title":"Upgrade and Security Bulletin Checks","description":"The Terramate CLI commands interacts with the Terramate Checkpoint service to check for the availability of new versions and for critical security bulletins about the current version."},"headers":[],"relativePath":"cli/configuration/upgrade-check.md","filePath":"cli/configuration/upgrade-check.md"}'),i={name:"cli/configuration/upgrade-check.md"},n=r('<h1 id="upgrade-and-security-bulletin-checks" tabindex="-1">Upgrade and Security Bulletin Checks <a class="header-anchor" href="#upgrade-and-security-bulletin-checks" aria-label="Permalink to &quot;Upgrade and Security Bulletin Checks&quot;">​</a></h1><p>The Terramate CLI commands interacts with the <a href="https://checkpoint-api.terramate.io/" target="_blank" rel="noreferrer">Terramate Checkpoint</a> service to check for the availability of new versions and for critical security bulletins about the current version.</p><p>The Checkpoint service is based on Hashicorp&#39;s <a href="https://checkpoint.hashicorp.com/" target="_blank" rel="noreferrer">Checkpoint</a> which is used by most of theirs products, including Terraform.</p><p>One place where the effect of this can be seen is in <code>terramate version</code>, where it is used by default to indicate in the output when a newer version is available.</p><p>Only <em>anonymous information</em>, which cannot be used to identify the user or host, is sent to Checkpoint. An anonymous ID is sent which helps de-duplicate warning messages. Both the anonymous id and the use of checkpoint itself are completely optional and can be disabled.</p><p>Checkpoint itself can be entirely disabled by setting the environment variable <code>CHECKPOINT_DISABLE</code> to any non-empty value.</p><p>The <a href="https://github.com/terramate-io/go-checkpoint" target="_blank" rel="noreferrer">Checkpoint client code</a> used by Terramate is available for review by any interested party</p>',7),c=[n];function o(s,h,l,d,p,u){return a(),t("div",null,c)}const b=e(i,[["render",o]]);export{f as __pageData,b as default};
