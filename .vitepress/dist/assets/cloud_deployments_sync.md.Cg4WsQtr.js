import{_ as e,c as a,o as t,a4 as n}from"./chunks/framework.Bl20_RFa.js";const y=JSON.parse('{"title":"Synchronize Deployments to Terramate Cloud","description":"","frontmatter":{},"headers":[],"relativePath":"cloud/deployments/sync.md","filePath":"cloud/deployments/sync.md"}'),o={name:"cloud/deployments/sync.md"},s=n(`<h1 id="synchronize-deployments-to-terramate-cloud" tabindex="-1">Synchronize Deployments to Terramate Cloud <a class="header-anchor" href="#synchronize-deployments-to-terramate-cloud" aria-label="Permalink to &quot;Synchronize Deployments to Terramate Cloud&quot;">​</a></h1><h2 id="synchronize-deployments-with-terramate-cli" tabindex="-1">Synchronize Deployments with Terramate CLI <a class="header-anchor" href="#synchronize-deployments-with-terramate-cli" aria-label="Permalink to &quot;Synchronize Deployments with Terramate CLI&quot;">​</a></h2><p>In order to display deployments on Terramate Cloud, we need to synchronize the status and details.</p><p>When already using <a href="./../../introduction">Terramate CLI</a> to orchestrate your stacks, the configuration needed to synchronize deployments is minimal.</p><p>You can synchronize deployments using <a href="./../../cli/cmdline/run"><code>terramate run</code></a> or reduce the overhead on the caller side by using <a href="./../../cli/orchestration/scripts">Terramate Scripts</a>, e.g. <code>terramate script run</code> where you can trigger deployment sync automatically.</p><h3 id="synchronize-deployments-using-terramate-run" tabindex="-1">Synchronize Deployments using <code>terramate run</code> <a class="header-anchor" href="#synchronize-deployments-using-terramate-run" aria-label="Permalink to &quot;Synchronize Deployments using \`terramate run\`&quot;">​</a></h3><p>The <a href="./../../cli/cmdline/run">run</a> command in Terramate CLI offers some command line options to synchronize deployment information to Terramate Cloud.</p><ul><li><code>--cloud-sync-deployment</code> Synchronizes the deployment status and logs to Terramate Cloud</li><li><code>--cloud-sync-terraform-plan=FILE</code> A Terraform integration that allows to synchronize details about the changed, added or deleted Terraform Resources that were planned to be applied in the deployment</li></ul><p>The full command line to run an auto approved apply based on an existing plan file looks like the following:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">terramate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --cloud-sync-deployment</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --cloud-sync-terraform-plan=out.tfplan</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  terraform</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apply</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -auto-approve</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> out.tfplan</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Make sure to use the same plan file for the <code>terraform apply</code> command and the Terraform Integration.</p></div><p>It is recommended to create a Terramate Script as explained in the next section, to provide an easy interface for users that can be used on local machines the same way as in CI/CD automated environments. This way the options do not need to be added and memorized.</p><p>In case communication with Terramate Cloud fails, the deployments will continue as expected but the deployment will not be synchronized with Terramate Cloud. Warning messages will help you identify any problems.</p><p>You will need to be signed in to Terramate Cloud from Terramate CLI to synchronize deployments. When executing the command from GitHub Actions, ensure you have set up a trust relationship between Terramate Cloud and your GitHub organization.</p><p>See <a href="./../organization/settings#general-settings">GitHub Trust</a> for more information.</p>`,15),i=[s];function r(l,d,c,p,h,m){return t(),a("div",null,i)}const k=e(o,[["render",r]]);export{y as __pageData,k as default};
