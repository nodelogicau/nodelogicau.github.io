# vCard

The vCard standard was created as a portable format for sharing contact information across a broad
range of applications. It includes support for linking to external services for calendaring and
scheduling applications.

A vCard object may represent an individual, group, organization, location, etc., providing a
means for locating and coordinating both people and systems.

It is common for organizations to use a variety of dedicated object directories and asset management
tools for managing people and assets, however this usually leads to application lock-in whereby
everyone is forced to use the same tooling for every use-case, regardless of its suitability and/or
capability.

An open format such as vCard allows for the distributed sharing of information across systems that
provides similar functionality to centrally managed tools. However as an open standard it allows
for integration with multiple tools simultaneously, and does not present the same lock-in inherent
with proprietary tooling.

A vCard object is typically not published explicitly, but rather is attached to a related object
(either inline or as a link) such as an event or action. A receiving system may choose to aggregate
such vCard objects so it may be used in future for initiating scheduling and other communications.

As vCard is a distributed data mechanism it may also be maintained or updated locally to reflect
additional information related to entities known to a system. Any future updates from external
sources should be merged with local changes.
