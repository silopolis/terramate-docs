import{_ as i,c as a,o as s,a4 as n}from"./chunks/framework.Bl20_RFa.js";const g=JSON.parse('{"title":"Runtime Configuration","description":"Learn how to configure environment variables available to the terramate run command.","frontmatter":{"title":"Runtime Configuration","description":"Learn how to configure environment variables available to the terramate run command."},"headers":[],"relativePath":"cli/orchestration/runtime-configuration.md","filePath":"cli/orchestration/runtime-configuration.md"}'),e={name:"cli/orchestration/runtime-configuration.md"},t=n(`<h1 id="runtime-configuration" tabindex="-1">Runtime Configuration <a class="header-anchor" href="#runtime-configuration" aria-label="Permalink to &quot;Runtime Configuration&quot;">​</a></h1><p>The <code>terramate.config.run.env</code> block can be used to define a map of environment variables that will be set when running a command using <code>terramate run</code>.</p><p>The following example exports the <code>TF_PLUGIN_CACHE_DIR</code> environment variable to enable <a href="https://www.terraform.io/cli/config/config-file#provider-plugin-cache" target="_blank" rel="noreferrer">Terraform Provider Plugin Caching</a>.</p><div class="language-hcl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">hcl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terramate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        TF_PLUGIN_CACHE_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/some/path/etc&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Inside the <code>terramate.config.run.env</code> block the <code>env</code> namespace will be available including environment variables retrieved from the host:</p><div class="language-hcl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">hcl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terramate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        TF_PLUGIN_CACHE_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">env</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HOME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.terraform-cache-dir&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>In addition, Globals (<code>global.*</code>) and Metadata (<code>terramate.*</code>) are available and are evaluated lazily within the stack context that commands are executed in.</p><p>The <code>env</code> namespace is meant to give access to the host environment variables, it is read-only and is only available when evaluating <code>terramate.config.run.env</code> blocks.</p><p>Any attributes defined in <code>terramate.config.run.env</code> blocks won&#39;t affect the <code>env</code> namespace.</p><p>You can have multiple <code>terramate.config.run.env</code> blocks defined in different files, but variable names <strong>cannot</strong> be defined twice.</p>`,10),l=[t];function r(h,p,o,c,k,d){return s(),a("div",null,l)}const u=i(e,[["render",r]]);export{g as __pageData,u as default};
