import{_ as e,c as t,o as a,a4 as i}from"./chunks/framework.Bl20_RFa.js";const k=JSON.parse('{"title":"Terragrunt Integration","description":"","frontmatter":{},"headers":[],"relativePath":"cli/change-detection/integrations/terragrunt.md","filePath":"cli/change-detection/integrations/terragrunt.md"}'),n={name:"cli/change-detection/integrations/terragrunt.md"},s=i(`<h1 id="terragrunt-integration" tabindex="-1">Terragrunt Integration <a class="header-anchor" href="#terragrunt-integration" aria-label="Permalink to &quot;Terragrunt Integration&quot;">​</a></h1><p><strong>Note:</strong> This is an upcoming experimental feature that is subject to change in the future. To use it now, you must enable the project config option <code>terramate.config.experiments = [&quot;terragrunt&quot;]</code>.</p><p>Terramate now features built-in change detection for Terragrunt projects. This integration allows you to quickly identify which Terragrunt stacks changed based on the structure of the configuration.</p><h2 id="how-it-works" tabindex="-1">How it works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How it works&quot;">​</a></h2><p>In addition to the normal stack change detection, Terramate parses the Terragrunt configuration and also identify the cases below:</p><ul><li>included files (by processing <code>include</code> blocks)</li><li>dependencies (<code>dependency</code> and <code>dependencies</code> blocks)</li><li>file read by function calls (<code>read_terragrunt_config()</code>, <code>read_tfvars_file()</code> and etc)</li><li>local <code>terraform.source</code> blocks.</li><li>etc</li></ul><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Simply enable it in the experiments configuration:</p><div class="language-hcl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">hcl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terramate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    experiments</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;terragrunt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,9),r=[s];function o(c,l,h,d,p,g){return a(),t("div",null,r)}const f=e(n,[["render",o]]);export{k as __pageData,f as default};
