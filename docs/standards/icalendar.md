# iCalendar

The iCalendar standard was created to improve interoperability between popular Groupware applications,
so that events such as meetings and appointments could be shared (via email) without worrying about
which application the participants are using.

Whilst iCalendar support has become ubiquitous for event interoperability, its support for workflows
(e.g. tasks, etc.) and journaling has not been adopted widely, which is perhaps due to less demand
for interoperability regarding these use-cases (i.e. work collaboration is often managed via a single tool).

However, reliance on a single tool for any use-case is not without its problems, which often don't become
apparent until after years of investment and adoption of processes that establish hard dependencies on
such tools. 

Often the decision to migrate to other tools is expensive, in both time and effort, and creates
a backlog of tech debt that is rarely resolved completely. But the problem of dependency on these core tools
remains, albeit with an increasing amount of tech debt.

Open standards such as iCalendar present an opportunity to avoid this absolute lock-in to tools, in the same
way that we are not constrained to use a single common application for event management.

A unique feature of iCalendar is that it is essentially a distributed data format. The source of truth for
an event in iCalendar is the one available to you (with the latest sequence identifier). What this means is
that you may receive a data object from an external source, but are able to make further changes to
support a given use-case. Such changes can be maintained locally, or shared back to the original source
as required, but either approach is supported in iCalendar.

This flexible and distributed nature of iCalendar means that you are not constrained to a single, centralized
tool for managing historical and future data.
