(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{3783:function(k,r,a){k.exports={basic:a(4285),"config-provider":a(4286),customize:a(4287),description:a(4288),simple:a(4289)}},4285:function(k,r,a){k.exports={content:{"zh-CN":[["p","\u7B80\u5355\u7684\u5C55\u793A\u3002"]],"en-US":[["p","Simplest Usage."]]},meta:{order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"},filename:"components/empty/demo/basic.md",id:"components-empty-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Empty } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>Empty <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Empty <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Empty</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Empty <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Empty</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var l=a(0),f=a(41);r.default=void 0;var c=a(13),u=function(){return l.createElement(c.Empty,null)},e;return l.createElement(u)}}},4286:function(k,r,a){k.exports={content:{"zh-CN":[["p","\u81EA\u5B9A\u4E49\u5168\u5C40\u7EC4\u4EF6\u7684 Empty \u6837\u5F0F\u3002"]],"en-US":[["p","Use ConfigProvider set global Empty style."]]},meta:{order:3,title:{"zh-CN":"\u5168\u5C40\u5316\u914D\u7F6E","en-US":"ConfigProvider"},filename:"components/empty/demo/config-provider.md",id:"components-empty-demo-config-provider"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { SmileOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import {
  Cascader<span class="token punctuation">,</span>
  ConfigProvider<span class="token punctuation">,</span>
  Divider<span class="token punctuation">,</span>
  List<span class="token punctuation">,</span>
  <span class="token keyword">Select</span><span class="token punctuation">,</span>
  <span class="token keyword">Switch</span><span class="token punctuation">,</span>
  Table<span class="token punctuation">,</span>
  Transfer<span class="token punctuation">,</span>
  TreeSelect<span class="token punctuation">,</span>
} from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> customizeRenderEmpty <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div style<span class="token operator">=</span>{{ textAlign<span class="token punctuation">:</span> <span class="token string">'center'</span> }}<span class="token operator">></span>
    <span class="token operator">&lt;</span>SmileOutlined style<span class="token operator">=</span>{{ fontSize<span class="token punctuation">:</span> <span class="token number">20</span> }} <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>Data <span class="token operator">Not</span> Found<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> style <span class="token operator">=</span> { width<span class="token punctuation">:</span> <span class="token number">200</span> }<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>customize<span class="token punctuation">,</span> setCustomize<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token keyword">Switch</span>
        unCheckedChildren<span class="token operator">=</span><span class="token string">"default"</span>
        checkedChildren<span class="token operator">=</span><span class="token string">"customize"</span>
        checked<span class="token operator">=</span>{customize}
        onChange<span class="token operator">=</span>{val <span class="token operator">=</span><span class="token operator">></span> {
          <span class="token function">setCustomize</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        }}
      <span class="token operator">/</span><span class="token operator">></span>

      <span class="token operator">&lt;</span>Divider <span class="token operator">/</span><span class="token operator">></span>

      <span class="token operator">&lt;</span>ConfigProvider renderEmpty<span class="token operator">=</span>{customize <span class="token operator">?</span> customizeRenderEmpty <span class="token punctuation">:</span> undefined}<span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"config-provider"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>h4<span class="token operator">></span><span class="token keyword">Select</span><span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token keyword">Select</span> style<span class="token operator">=</span>{style} <span class="token operator">/</span><span class="token operator">></span>

          <span class="token operator">&lt;</span>h4<span class="token operator">></span>TreeSelect<span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
          <span class="token operator">&lt;</span>TreeSelect style<span class="token operator">=</span>{style} treeData<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token punctuation">]</span>} <span class="token operator">/</span><span class="token operator">></span>

          <span class="token operator">&lt;</span>h4<span class="token operator">></span>Cascader<span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
          <span class="token operator">&lt;</span>Cascader style<span class="token operator">=</span>{style} options<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token punctuation">]</span>} showSearch <span class="token operator">/</span><span class="token operator">></span>

          <span class="token operator">&lt;</span>h4<span class="token operator">></span>Transfer<span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
          <span class="token operator">&lt;</span>Transfer <span class="token operator">/</span><span class="token operator">></span>

          <span class="token operator">&lt;</span>h4<span class="token operator">></span>Table<span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
          <span class="token operator">&lt;</span>Table
            style<span class="token operator">=</span>{{ marginTop<span class="token punctuation">:</span> <span class="token number">8</span> }}
            columns<span class="token operator">=</span>{<span class="token punctuation">[</span>
              {
                title<span class="token punctuation">:</span> <span class="token string">'Name'</span><span class="token punctuation">,</span>
                dataIndex<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
                key<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
              }<span class="token punctuation">,</span>
              {
                title<span class="token punctuation">:</span> <span class="token string">'Age'</span><span class="token punctuation">,</span>
                dataIndex<span class="token punctuation">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
                key<span class="token punctuation">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
              }<span class="token punctuation">,</span>
            <span class="token punctuation">]</span>}
          <span class="token operator">/</span><span class="token operator">></span>

          <span class="token operator">&lt;</span>h4<span class="token operator">></span>List<span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
          <span class="token operator">&lt;</span>List <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ConfigProvider<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> SmileOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Cascader<span class="token punctuation">,</span>
  ConfigProvider<span class="token punctuation">,</span>
  Divider<span class="token punctuation">,</span>
  List<span class="token punctuation">,</span>
  Select<span class="token punctuation">,</span>
  Switch<span class="token punctuation">,</span>
  Table<span class="token punctuation">,</span>
  Transfer<span class="token punctuation">,</span>
  TreeSelect<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">customizeRenderEmpty</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> textAlign<span class="token operator">:</span> <span class="token string">'center'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SmileOutlined</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Data Not Found<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token punctuation">{</span> width<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>customize<span class="token punctuation">,</span> setCustomize<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span>
        <span class="token attr-name">unCheckedChildren</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span>
        <span class="token attr-name">checkedChildren</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customize<span class="token punctuation">"</span></span>
        <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>customize<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>val <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">setCustomize</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span> <span class="token punctuation">/></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ConfigProvider</span></span> <span class="token attr-name">renderEmpty</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>customize <span class="token operator">?</span> customizeRenderEmpty <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>config-provider<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>Select<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>

          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>TreeSelect<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span></span> <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>

          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>Cascader<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">showSearch</span> <span class="token punctuation">/></span></span>

          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>Transfer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Transfer</span></span> <span class="token punctuation">/></span></span>

          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>Table<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Table</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">'Name'</span><span class="token punctuation">,</span>
                dataIndex<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
                key<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">'Age'</span><span class="token punctuation">,</span>
                dataIndex<span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
                key<span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span>

          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ConfigProvider</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> SmileOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Cascader<span class="token punctuation">,</span>
  ConfigProvider<span class="token punctuation">,</span>
  Divider<span class="token punctuation">,</span>
  List<span class="token punctuation">,</span>
  Select<span class="token punctuation">,</span>
  Switch<span class="token punctuation">,</span>
  Table<span class="token punctuation">,</span>
  Transfer<span class="token punctuation">,</span>
  TreeSelect<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">customizeRenderEmpty</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SmileOutlined</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Data Not Found<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>customize<span class="token punctuation">,</span> setCustomize<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span>
        <span class="token attr-name">unCheckedChildren</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span>
        <span class="token attr-name">checkedChildren</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customize<span class="token punctuation">"</span></span>
        <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>customize<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">setCustomize</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span> <span class="token punctuation">/></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ConfigProvider</span></span> <span class="token attr-name">renderEmpty</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>customize <span class="token operator">?</span> customizeRenderEmpty <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>config-provider<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>Select<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Select</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>

          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>TreeSelect<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TreeSelect</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span></span> <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>

          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>Cascader<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cascader</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>style<span class="token punctuation">}</span></span> <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">showSearch</span> <span class="token punctuation">/></span></span>

          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>Transfer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Transfer</span></span> <span class="token punctuation">/></span></span>

          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>Table<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Table</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
              <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Name'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Age'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
                <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span>

          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ConfigProvider</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var l=a(0),f=a(41);function c(n){return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(n)}r.default=void 0;var u=a(60),e=a(13),p=d(a(0));function v(n){if(typeof WeakMap!="function")return null;var t=new WeakMap,s=new WeakMap;return(v=function(g){return g?s:t})(n)}function d(n,t){if(!t&&n&&n.__esModule)return n;if(n===null||c(n)!="object"&&typeof n!="function")return{default:n};var s=v(t);if(s&&s.has(n))return s.get(n);var o={__proto__:null},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in n)if(i!=="default"&&Object.prototype.hasOwnProperty.call(n,i)){var m=g?Object.getOwnPropertyDescriptor(n,i):null;m&&(m.get||m.set)?Object.defineProperty(o,i,m):o[i]=n[i]}return o.default=n,s&&s.set(n,o),o}function b(n,t){return x(n)||N(n,t)||A(n,t)||z()}function z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(n,t){if(n){if(typeof n=="string")return C(n,t);var s=Object.prototype.toString.call(n).slice(8,-1);if(s==="Object"&&n.constructor&&(s=n.constructor.name),s==="Map"||s==="Set")return Array.from(n);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return C(n,t)}}function C(n,t){(t==null||t>n.length)&&(t=n.length);for(var s=0,o=new Array(t);s<t;s++)o[s]=n[s];return o}function N(n,t){var s=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(s!=null){var o,g,i,m,E=[],h=!0,S=!1;try{if(i=(s=s.call(n)).next,t===0){if(Object(s)!==s)return;h=!1}else for(;!(h=(o=i.call(s)).done)&&(E.push(o.value),E.length!==t);h=!0);}catch(T){S=!0,g=T}finally{try{if(!h&&s.return!=null&&(m=s.return(),Object(m)!==m))return}finally{if(S)throw g}}return E}}function x(n){if(Array.isArray(n))return n}var R=function(){return p.default.createElement("div",{style:{textAlign:"center"}},p.default.createElement(u.SmileOutlined,{style:{fontSize:20}}),p.default.createElement("p",null,"Data Not Found"))},w={width:200},j=function(){var t=(0,p.useState)(!1),s=b(t,2),o=s[0],g=s[1];return p.default.createElement("div",null,p.default.createElement(e.Switch,{unCheckedChildren:"default",checkedChildren:"customize",checked:o,onChange:function(m){g(m)}}),p.default.createElement(e.Divider,null),p.default.createElement(e.ConfigProvider,{renderEmpty:o?R:void 0},p.default.createElement("div",{className:"config-provider"},p.default.createElement("h4",null,"Select"),p.default.createElement(e.Select,{style:w}),p.default.createElement("h4",null,"TreeSelect"),p.default.createElement(e.TreeSelect,{style:w,treeData:[]}),p.default.createElement("h4",null,"Cascader"),p.default.createElement(e.Cascader,{style:w,options:[],showSearch:!0}),p.default.createElement("h4",null,"Transfer"),p.default.createElement(e.Transfer,null),p.default.createElement("h4",null,"Table"),p.default.createElement(e.Table,{style:{marginTop:8},columns:[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"}]}),p.default.createElement("h4",null,"List"),p.default.createElement(e.List,null))))},P;return l.createElement(j)},style:`
.code-box-demo .config-provider h4 {
  font-size: inherit;
  margin: 16px 0 8px 0;
}
`}},4287:function(k,r,a){k.exports={content:{"zh-CN":[["p","\u81EA\u5B9A\u4E49\u56FE\u7247\u94FE\u63A5\u3001\u56FE\u7247\u5927\u5C0F\u3001\u63CF\u8FF0\u3001\u9644\u5C5E\u5185\u5BB9\u3002"]],"en-US":[["p","Customize image source, image size, description and extra content."]]},meta:{order:2,title:{"zh-CN":"\u81EA\u5B9A\u4E49","en-US":"Customize"},filename:"components/empty/demo/customize.md",id:"components-empty-demo-customize"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Button<span class="token punctuation">,</span> Empty } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Empty
    image<span class="token operator">=</span><span class="token string">"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"</span>
    imageStyle<span class="token operator">=</span>{{
      height<span class="token punctuation">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    }}
    description<span class="token operator">=</span>{
      <span class="token operator">&lt;</span>span<span class="token operator">></span>
        Customize <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#API"</span><span class="token operator">></span>Description<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
    }
  <span class="token operator">></span>
    <span class="token operator">&lt;</span>Button type<span class="token operator">=</span><span class="token string">"primary"</span><span class="token operator">></span>Create Now<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Empty<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Empty <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Empty</span></span>
    <span class="token attr-name">image</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg<span class="token punctuation">"</span></span>
    <span class="token attr-name">imageStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      height<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">description</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>
        Customize <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#API<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Description<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Create Now<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Empty</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Empty <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Empty</span></span>
    <span class="token attr-name">image</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg<span class="token punctuation">"</span></span>
    <span class="token attr-name">imageStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">description</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>
        Customize <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#API<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Description<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Create Now<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Empty</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var l=a(0),f=a(41);r.default=void 0;var c=a(13),u=e(a(0));function e(d){return d&&d.__esModule?d:{default:d}}var p=function(){return u.default.createElement(c.Empty,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:60},description:u.default.createElement("span",null,"Customize ",u.default.createElement("a",{href:"#API"},"Description"))},u.default.createElement(c.Button,{type:"primary"},"Create Now"))},v;return l.createElement(p)}}},4288:function(k,r,a){k.exports={content:{"zh-CN":[["p","\u65E0\u63CF\u8FF0\u5C55\u793A\u3002"]],"en-US":[["p","Simplest Usage with no description."]]},meta:{order:4,title:{"zh-CN":"\u65E0\u63CF\u8FF0","en-US":"No description"},filename:"components/empty/demo/description.md",id:"components-empty-demo-description"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Empty } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>Empty description<span class="token operator">=</span>{<span class="token boolean">false</span>} <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Empty <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Empty</span></span> <span class="token attr-name">description</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Empty <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Empty</span></span> <span class="token attr-name">description</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var l=a(0),f=a(41);r.default=void 0;var c=a(13),u=function(){return l.createElement(c.Empty,{description:!1})},e;return l.createElement(u)}}},4289:function(k,r,a){k.exports={content:{"zh-CN":[["p","\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E ",["code","image"]," \u4E3A ",["code","Empty.PRESENTED_IMAGE_SIMPLE"]," \u9009\u62E9\u53E6\u4E00\u79CD\u98CE\u683C\u7684\u56FE\u7247\u3002"]],"en-US":[["p","You can choose another style of ",["code","image"]," by setting image to ",["code","Empty.PRESENTED_IMAGE_SIMPLE"],"."]]},meta:{order:1,title:{"zh-CN":"\u9009\u62E9\u56FE\u7247","en-US":"Chose image"},filename:"components/empty/demo/simple.md",id:"components-empty-demo-simple"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Empty } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>Empty image<span class="token operator">=</span>{Empty<span class="token punctuation">.</span>PRESENTED_IMAGE_SIMPLE} <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Empty <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Empty</span></span> <span class="token attr-name">image</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Empty<span class="token punctuation">.</span><span class="token constant">PRESENTED_IMAGE_SIMPLE</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Empty <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Empty</span></span> <span class="token attr-name">image</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Empty<span class="token punctuation">.</span><span class="token constant">PRESENTED_IMAGE_SIMPLE</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var l=a(0),f=a(41);r.default=void 0;var c=a(13),u=function(){return l.createElement(c.Empty,{image:c.Empty.PRESENTED_IMAGE_SIMPLE})},e;return l.createElement(u)}}}}]);
