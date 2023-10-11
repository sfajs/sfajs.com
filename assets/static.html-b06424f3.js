import{_ as e,o as i,c as d,e as a}from"./app-0418676b.js";const c={},s=a(`<h1 id="静态资源-halsp-static" tabindex="-1"><a class="header-anchor" href="#静态资源-halsp-static" aria-hidden="true">#</a> 静态资源 <code>(@halsp/static)</code></h1><p>安装 <code>@halsp/static</code> 以支持静态资源功能</p><ul><li>能够返回静态资源，如图片、html、css、js 等文件</li><li>能够匹配单个文件或整个文件夹</li><li>可以托管静态网站</li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i @halsp/static
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><p>使用 <code>startup.useStatic()</code></p><div class="language-TS line-numbers-mode" data-ext="TS"><pre class="language-TS"><code>import &quot;@halsp/static&quot;;

startup.useStatic();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>useStatic</code> 如果不传参数，将匹配 <code>static</code> 文件夹，即写法等同于</p><div class="language-TS line-numbers-mode" data-ext="TS"><pre class="language-TS"><code>startup.useStatic({
  dir: &quot;static&quot;,
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="匹配文件" tabindex="-1"><a class="header-anchor" href="#匹配文件" aria-hidden="true">#</a> 匹配文件</h2><p><code>@halsp/static</code> 有两种匹配文件的方式</p><ol><li>匹配单个文件</li><li>匹配文件夹中的所有文件，路由与文件相对路径相同</li></ol><h2 id="匹配单个文件" tabindex="-1"><a class="header-anchor" href="#匹配单个文件" aria-hidden="true">#</a> 匹配单个文件</h2><div class="language-TS line-numbers-mode" data-ext="TS"><pre class="language-TS"><code>startup.useStatic({
  file: &quot;static/img.png&quot;,
  reqPath: &quot;/img&quot;
})
// 请求访问 /img 将返回 img.png 文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匹配单个文件，<code>useStatic</code> 接收配置参数包含以下参数</p><h3 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> file</h3><blockquote><p>必选参数</p></blockquote><p>指定文件的路径</p><h3 id="reqpath" tabindex="-1"><a class="header-anchor" href="#reqpath" aria-hidden="true">#</a> reqPath</h3><blockquote><p>可选参数</p></blockquote><p>指定请求路径。如果不设置，请求路径将与 <code>file</code> 参数相同</p><h3 id="encoding" tabindex="-1"><a class="header-anchor" href="#encoding" aria-hidden="true">#</a> encoding</h3><blockquote><p>可选参数</p></blockquote><p>读取文件用的编码，如 <code>utf-8</code>/<code>ascii</code> 等</p><h2 id="匹配文件夹" tabindex="-1"><a class="header-anchor" href="#匹配文件夹" aria-hidden="true">#</a> 匹配文件夹</h2><p>匹配文件夹中的所有文件，<code>useStatic</code> 接收配置参数包含以下参数</p><h3 id="dir" tabindex="-1"><a class="header-anchor" href="#dir" aria-hidden="true">#</a> dir</h3><blockquote><p>必选参数</p></blockquote><p><code>@halsp/static</code> 会在该文件夹中按访问路径匹配文件，路由与文件相对路径相同</p><h3 id="prefix" tabindex="-1"><a class="header-anchor" href="#prefix" aria-hidden="true">#</a> prefix</h3><blockquote><p>可选参数</p></blockquote><p>请求访问前缀，即虚拟目录</p><p>比如你将图片放在 <code>static</code> 文件夹，但想统一用 <code>file</code> 前缀来访问</p><ul><li>GET file/1.png</li><li>GET file/2.txt</li><li>...</li></ul><div class="language-TS line-numbers-mode" data-ext="TS"><pre class="language-TS"><code>startup.useStatic({
  dir: &quot;static&quot;,
  prefix: &quot;file&quot;,
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude" aria-hidden="true">#</a> exclude</h3><blockquote><p>可选参数</p></blockquote><p>此参数可以指定排除的文件</p><p>值可以为字符串或字符串数组的 <code>glob</code> 表达式</p><div class="language-TS line-numbers-mode" data-ext="TS"><pre class="language-TS"><code>startup.useStatic({
  exclude: [&quot;dir/*.html&quot;],
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="listdir" tabindex="-1"><a class="header-anchor" href="#listdir" aria-hidden="true">#</a> listDir</h3><blockquote><p>可选参数</p></blockquote><p>如果值为 <code>true</code>，请求路径为文件夹时，会列出文件夹中的所有文件和文件夹（<code>exclude</code> 参数可以排除文件）</p><p>下面的示例，请求地址为 <code>/files</code> 时，会列出 <code>/static</code> 文件夹下的所有文件</p><div class="language-TS line-numbers-mode" data-ext="TS"><pre class="language-TS"><code>startup.useStatic({
  dir: &quot;static&quot;,
  prefix: &quot;files&quot;,
  listDir: true,
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="useindex" tabindex="-1"><a class="header-anchor" href="#useindex" aria-hidden="true">#</a> useIndex</h3><blockquote><p>可选参数</p></blockquote><p>值可以是字符串或字符串数组，或 <code>true</code></p><p>请求路径为文件夹时，会查询是否存在索引文件并返回</p><ul><li>如果值为 <code>true</code>，将自动查找文件 <code>index.html</code></li><li>如果值为字符串或字符串数组，将查找指定文件</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>一般 <code>useIndex</code> 参数用于托管静态网站</p></div><h3 id="useext" tabindex="-1"><a class="header-anchor" href="#useext" aria-hidden="true">#</a> useExt</h3><blockquote><p>可选参数</p></blockquote><p>值可以是字符串或字符串数组，或 <code>true</code></p><p>请求路径为文件时，如果此文件不存在，将自动查找带有指定扩展名的文件</p><ul><li>如果值为 <code>true</code>，将自动补足扩展名 <code>.html</code> 并尝试查找和返回</li><li>如果值为字符串或字符串数组，将自动补足指定扩展名并尝试查找和返回</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>一般 <code>useExt</code> 参数用于托管静态网站</p></div><h2 id="请求方法" tabindex="-1"><a class="header-anchor" href="#请求方法" aria-hidden="true">#</a> 请求方法</h2><p>可以指定允许请求静态资源的 http 请求方法，在 <code>useStatic</code> 函数中传入参数 <code>method</code></p><p>参数类型为字符串或字符串数组</p><p>如 <code>&quot;get&quot;</code>/<code>&quot;post&quot;</code>/<code>[&quot;get&quot;,&quot;post&quot;]</code></p><div class="language-TS line-numbers-mode" data-ext="TS"><pre class="language-TS"><code>startup.useStatic({
  file: &quot;static/img.png&quot;,
  method: &quot;GET&quot;,
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或</p><div class="language-TS line-numbers-mode" data-ext="TS"><pre class="language-TS"><code>startup.useStatic({
  file: &quot;static/img.png&quot;,
  method: [&quot;GET&quot;, &quot;POST&quot;],
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认该参数值为 <code>GET</code></p><p>如果值为 <code>ANY</code> 或 [&#39;ANY&#39;] ，将允许任何请求方法请求静态资源</p><h2 id="_404" tabindex="-1"><a class="header-anchor" href="#_404" aria-hidden="true">#</a> 404</h2><p>在 <code>useStatic</code> 函数中传入参数 <code>file404</code>，找不到请求文件时会返回 404</p><p><code>@halsp/static</code> 如果找不到匹配的静态文件，会根据此参数寻找 404 文件并返回</p><ul><li>如果未设置此参数，将进入下一个中间件（如果存在下一个中间件）</li><li>如果值为文件相对路径，将查找 <code>dir</code> 参数文件夹下的相对文件</li><li>如果值为绝对路径，将查找绝对路径的文件</li><li>如果值为 <code>true</code>，将查找 <code>dir</code> 参数文件夹下的 <code>404.html</code> 文件</li></ul><div class="custom-container warning"><p class="custom-container-title">注意</p><p>如果设置了此参数，代码将不会再执行下一个中间件，即 <code>useStatic</code> 之后的中间件都不会被执行。 此参数一般用于静态网站托管</p></div><h2 id="_405" tabindex="-1"><a class="header-anchor" href="#_405" aria-hidden="true">#</a> 405</h2><p>在 <code>useStatic</code> 函数中传入参数 <code>file405</code>，请求参数错误会返回 405</p><p>如果请求参数错误，但找到匹配的静态文件，会根据此参数寻找 405 文件并返回</p><ul><li>如果未设置此参数，将进入下一个中间件（如果存在下一个中间件）</li><li>如果值为文件相对路径，将查找 <code>dir</code> 参数文件夹下的相对文件</li><li>如果值为绝对路径，将查找绝对路径的文件</li><li>如果值为 <code>true</code>，将查找 <code>dir</code> 参数文件夹下的 <code>404.html</code> 文件</li></ul><h3 id="strictmethod" tabindex="-1"><a class="header-anchor" href="#strictmethod" aria-hidden="true">#</a> strictMethod</h3><p>在 <code>useStatic</code> 函数中传入参数 <code>strictMethod</code></p><p>如果值为 <code>true</code>，请求方法错误时将不查询文件是否存在，始终返回 405</p><p>此参数可用于提高性能</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>如果设置了此参数，请求方法错误时代码将不会再执行下一个中间件，即 <code>useStatic</code> 之后的中间件都不会被执行。 此参数一般用于静态网站托管</p></div><h2 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h2><p>你可以指定读取静态资源文件的编码，在 <code>useStatic</code> 函数中传入参数 <code>encoding</code></p><p>参数类型为 <code>BufferEncoding</code></p><div class="language-TS line-numbers-mode" data-ext="TS"><pre class="language-TS"><code>startup.useStatic({
  file: &quot;static/img.png&quot;,
  encoding: &#39;base64&#39;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此参数将直接影响返回的内容</p><p>如在 http 中，该值可保持默认，或设置为 <code>binary</code></p><p>在 serverless 中，该值可能需要设置为 <code>base64</code></p><h2 id="多个静态资源" tabindex="-1"><a class="header-anchor" href="#多个静态资源" aria-hidden="true">#</a> 多个静态资源</h2><p>你可以使用多次 <code>.useStatic</code> 函数，并传入不同参数，以添加多个静态资源文件或静态资源目录</p><h2 id="cli-编译" tabindex="-1"><a class="header-anchor" href="#cli-编译" aria-hidden="true">#</a> CLI 编译</h2><p>如果使用 <code>@halsp/cli</code> 编译项目</p><p><code>static</code> 目录或 <code>src/static</code> 目录以及其中的文件，会被自动拷贝到输出目录</p><p>如输出目录是 <code>dist</code></p><ul><li><code>/static -&gt; /dist/static</code></li><li><code>/src/static -&gt; /dist/static</code></li></ul><p>你也可以通过添加 <code>.halsprc.ts</code> 文件的 <code>build.assets</code> 数组元素，以增加编译时自动拷贝的文件或文件夹</p><h2 id="托管静态网站" tabindex="-1"><a class="header-anchor" href="#托管静态网站" aria-hidden="true">#</a> 托管静态网站</h2><p>使用 <code>@halsp/static</code> 可以方便的托管静态网站</p><p><code>@halsp/cli</code> 的命令 <code>halsp serve</code> 就是用到了这个能力</p><div class="language-TS line-numbers-mode" data-ext="TS"><pre class="language-TS"><code>startup.useStatic({
  dir: process.cwd(),
  listDir: !this.hideDir,
  use404: true,
  useIndex: true,
  method: &quot;ANY&quot;,
  useExt: true,
  exclude: this.exclude,
  prefix: this.prefix,
  encoding: this.encoding as BufferEncoding,
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,100),t=[s];function n(l,o){return i(),d("div",null,t)}const u=e(c,[["render",n],["__file","static.html.vue"]]);export{u as default};
